# == Schema Information
#
# Table name: users
#
#  id               :bigint(8)        not null, primary key
#  username         :string           not null
#  session_token    :string           not null
#  password_digest  :string           not null
#  email            :string           not null
#  icon_image_url   :string
#  header_image_url :string
#  bio              :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :username, uniqueness: true

  after_initialize :ensure_session_token#, :ensure_username
  before_create :ensure_username

  has_many :frames,
  foreign_key: :photographer_id

  has_one_attached :user_avatar

  has_many :followings,
  foreign_key: :followee_id,
  class_name: :Following

  has_many :follows,
  foreign_key: :follower_id,
  class_name: :Following

  has_many :followers,
  through: :followings,
  source: :follower

  has_many :followees,
  through: :follows,
  source: :followee

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_and_validate(identifier, password)
    @user = User.find_by(email: identifier) || User.find_by(username: identifier)
    return @user if @user && @user.valid_password?(password)
    return nil
  end



  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def ensure_username
    if self.username == '' || self.username == nil
      self.username = self.stripped_email.capitalize
    end
  end

  def stripped_email
    at_sym_locale = self.email.index('@')
    return nil unless at_sym_locale
    self.email[0...at_sym_locale]
  end

  private

  def valid_password?(password)
    unsaltedHash = BCrypt::Password.new(self.password_digest)
    unsaltedHash.is_password?(password)
  end




  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end


end
