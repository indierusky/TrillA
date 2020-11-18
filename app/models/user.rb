class User < ApplicationRecord 


validates :email, presence:true, uniqueness:true 
validates :session_token, presence:true, uniqueness:true 
validates :password_digest, presence:true, uniqueness:true 
validates :password, length: {minimum: 6}, allow_nil:true 
validates :username, presence:true, uniqueness:true 


attr_reader :password 

after_initialize :ensure_session_token

has_many :boards,
primary_key: :id,
foreign_key: :user_id,
class_name: 'Board'


def self.find_by_credentials(email, password) 
    user = User.find_by(email: email) 

    return nil unless user 

    user.is_password?(password) ? user : nil

end

def self.generate_session_token

  SecureRandom.urlsafe_base64
end 


def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)

end

def is_password?(password)

    BCrypt::Password.new(self.password_digest).is_password?(password)

end 


def ensure_session_token

self.session_token ||= User.generate_session_token

end 

def reset_session_token!

    self.session_token = User.generate_session_token
    self.save
    self.session_token

end 



end 



