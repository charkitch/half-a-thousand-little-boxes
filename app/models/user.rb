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
  validates :username, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_and_validate(username, password)
    debugger
    @user =User.find_by_username(username)

    return @user if @user && @user.valid_password?(password)

    return nil
  end

  def valid_password?(password)
    unsaltedHash = BCrypt::Password.new(self.password_digest)
    unsaltedHash.is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end
