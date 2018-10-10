class Api::SessionsController < ApplicationController

  def create
    debugger
    @user = User.find_and_validate(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['invalid login'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: ['logged out']
    else
      render json: ['Not logged in currently'], status: 404
    end
  end

end
