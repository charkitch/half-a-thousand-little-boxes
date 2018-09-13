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
      render plain: 'invalid login', status: 401
    end
  end

  def destroy
    logout!
    render plain: 'logged out'
  end

end
