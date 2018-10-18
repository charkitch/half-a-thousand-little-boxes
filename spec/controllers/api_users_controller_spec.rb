require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'Post #create' do
    context 'with invalid params' do

      it 'filters params' do
        x = post :create, params: {
          user: {
            email: 'jasper@torrino',
            password: ''
          }
        }
        # should permit_params(:email, :user)
        should permit(:user).for(:create)
        should respond_with(422)
      end

      it 'validates the presence of the user email and password' do
        x = post :create, params: {
          user: {
            email: 'jasper@torrino',
            password: ''
          }
        }
        should respond_with(422)
      end

      it 'validates the password is at least 6 characters long' do
        shorty = post :create, params: {
          user: {
            email: 'jasper@torrino',
            password: 'blue'
          }
        }
        should respond_with(422)
      end
    end

    context 'with valid params' do
      it 'returns the user' do
        newby = post :create, format: :json, params: {
          user: {
            email: 'blary@blertz',
            password: 'blaryblary'
          }
        }
        expect(newby.successful?).to be(true)
        should respond_with(200)
      end

      it 'logs in the user' do
        newby = post :create, format: :json, params: {
          user: {
            email: 'blary@blertz',
            password: 'blaryblary'
          }
        }
        user = User.find_by_email('blary@blertz')
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'return a username when not given one' do
        newby = post :create, format: :json, params: {
          user: {
            email: 'blary@blertz',
            password: 'blaryblary'
          }
        }
        user = User.find_by_email('blary@blertz')
        expect(user.username).to eq('Blary')
      end
    end
  end
end
