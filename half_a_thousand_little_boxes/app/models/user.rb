class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :username, presence: true, uniquness: true

  after_initialize :ensure_session_token


  attr_reader :password
  after_initialize:

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_and_validate(username, password)
    @user.find_by(username: username)
    user
  end

  def valid_password(password)
    unsaltedHash = BCrypt::Password.new(self.password_digest)
    unsaltedHash.is_password?(password)
  end

  def reset_session_token
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end
