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

require 'rails_helper' #allows for use of abstracting syntax, user_email or user_url and the like!

RSpec.describe User, type: :model do #as of rspec 3 describe can be limited globally. Were that to happen calling on rspec here ensures it will still happen
  #describe constructs an example group
  describe 'password encryption' do

    it 'does not save passwords to the database' do #it creates an example inside the scope of the example group
      User.create!(email: 'Jasperon@torrino', password: 'janejane')
      user = User.find_by_email('Jasperon@torrino')
      expect(user.password).not_to be('janejane')
    end

    it 'encrypts the password using BCrypt' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'Jasper@torrino', password: 'janejane')
    end

    it 'imparts a capitalized username if none given based on the email' do
      User.create!(email: 'jasper@torrino', password: 'janejane')
      user = User.find_by_email('jasper@torrino')
      expect(user.username).to eq('Jasper') #eq not be since we don't care about object identity!
    end

  end

  describe 'profile avatar' do
    it 'can have one attached' do
      User.create!(email: 'zorba@greek', password: 'dupontgreek')
      zorbs = User.find_by(email: 'zorba@greek')
      # zorbs.user_avatar.attach(io: File.open('../../app/assets/images/user.svg', filename: 'user.svg', content_type: 'image/svg'))
      zorbs.user_avatar.attach(io: File.open(Rails.root + 'app/assets/images/user.svg'), filename: 'user.svg', content_type: 'image/svg')
      expect(zorbs.user_avatar).to be_attached
    end
  end

  describe 'session token' do #the object returned here is a subclass of example group
    it 'installs a session token if not given one' do # the object returned here is an instance of example which wraps an instance of example group
      jasper = User.create(username: 'Jasper@torrino', password: 'janejane')
      expect(jasper.session_token).not_to be_nil
    end
  end

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }

  it { should validate_length_of(:password).is_at_least(6) }

  it { should have_many(:frames) }
  it { should have_many(:followees) }
  it { should have_many(:followers) }
  it { should have_many(:follows) }
  it { should have_many(:followings) }

  it { should have_db_column(:id)}
  it { should have_db_column(:username)}
  it { should have_db_column(:email)}
  it { should have_db_column(:session_token)}
  it { should have_db_column(:bio)}
  it { should have_db_column(:created_at)}
  it { should have_db_column(:updated_at)}

  it { should have_db_index(:session_token) }
  it { should have_db_index(:username) }


end
