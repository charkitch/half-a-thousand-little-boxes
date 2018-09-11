class sessionsController < ApplicationController

  def create
    @user = User.find_and_validate(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(user)
      render 'api/users/show'
    else
      render plain: 'invalid login', status: 401
    end
  end

  def destroy
    logout!
  end

end
