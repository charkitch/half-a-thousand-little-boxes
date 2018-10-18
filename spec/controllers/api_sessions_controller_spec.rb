require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:user) do  #defines memoized helper called before the hook, i.e. with a bang it is not lazily loaded, defined immediately. Useful for queries and scope issues
    User.create(email: 'dreadpirate@roberts', password: 'asyouwish')
  end

  describe 'POST #create' do
    context 'with invalid credentials' do
      it 'is unsuccesful with an incorrect user' do
        post :create, params: {
          user: {
            email: 'wesley@thefarm',
            password: 'asyouwish'
          }
        }
        should respond_with(401)
      end
  #
      it 'is unsuccesful with an incorrect password' do
        post :create, params: {
          user: {
            email: 'dreadpirate@roberts',
            password: 'asouuuuuwiiiiish'
          }
        }
        should respond_with(401)
        wes = User.find_by(email: 'dreadpirate@roberts')
        expect(wes.session_token).not_to eq(session[:session_token])
      end
    end

    context 'with valid credentials' do
      it 'logs in the user upon success' do
        post :create, format: :json, params: {
          user: {
            email: 'dreadpirate@roberts',
            password: 'asyouwish'
          }
        }
        should respond_with(200)
        wes = User.find_by(email: 'dreadpirate@roberts')
        expect(wes.session_token).to eq(session[:session_token])
      end
      it 'accepts a username or an email' do
        post :create, format: :json, params: {
          user: {
            email: 'Dreadpirate', #need to fix email name up top
            password: 'asyouwish'
          }
        }
        should respond_with(200)
        wes = User.find_by(email: 'dreadpirate@roberts')
        expect(wes.session_token).to eq(session[:session_token])
      end
    end
  end

  describe 'DELETE #destroy' do
    before(:each) do
      post :create, format: :json, params: {
        user: {
          email: 'dreadpirate@roberts',
          password: 'asyouwish'
        }
      }
      @session_token = User.find_by_email('dreadpirate@roberts').session_token
    end

    it 'destroys the current session' do
      delete :destroy
      expect(session[:session_token]).to be_nil

      former_user = User.find_by_email('dreadpirate@roberts')
      expect(former_user.session_token).not_to eq(@session_token)
    end
  end

end
