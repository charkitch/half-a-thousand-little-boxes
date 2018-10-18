require 'rails_helper'

RSpec.describe Api::FollowingsController, type: :controller do

  let!(:wes) do
    User.create(email: 'dreadpirate@roberts', password: 'asyouwish')
  end

  let!(:thecount) do
    User.create(email: 'countdugan@notfive', password: 'saddestthing')
  end

  describe 'POST #create' do

    before do
      allow(controller).to receive(:current_user) { wes }
    end

    context 'with disallowed params' do
      it 'is unsuccesful with duplicates' do
        post :create, id: wes.id
        should respond_with(401)
      end

      it 'is unsuccesful with duplicates' do
        debugger
        expect(post: 'users/' + wes.id.to_s + '/following')
        debugger
      end
    end
  #
    #   it 'is unsuccesful with an incorrect password' do
    #     post :create, params: {
    #       user: {
    #         email: 'dreadpirate@roberts',
    #         password: 'asouuuuuwiiiiish'
    #       }
    #     }
    #     should respond_with(401)
    #     wes = User.find_by(email: 'dreadpirate@roberts')
    #     expect(wes.session_token).not_to eq(session[:session_token])
    #   end
    # end
    #
    # context 'with valid credentials' do
    #   it 'logs in the user upon success' do
    #     post :create, format: :json, params: {
    #       user: {
    #         email: 'dreadpirate@roberts',
    #         password: 'asyouwish'
    #       }
    #     }
    #     should respond_with(200)
    #     wes = User.find_by(email: 'dreadpirate@roberts')
    #     expect(wes.session_token).to eq(session[:session_token])
    #   end
    #   it 'accepts a username or an email' do
    #     post :create, format: :json, params: {
    #       user: {
    #         email: 'Dreadpirate', #need to fix email name up top
    #         password: 'asyouwish'
    #       }
    #     }
    #     should respond_with(200)
    #     wes = User.find_by(email: 'dreadpirate@roberts')
    #     expect(wes.session_token).to eq(session[:session_token])
    #   end
    # end
  end

end
