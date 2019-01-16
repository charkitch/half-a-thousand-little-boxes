class Api::AvatarController < ApplicationController

  def create
    user_without_face = current_user
    if user_without_face.id == params[:avatar][:shown_user_id].to_i
      user_without_face.avatar.attach(params[:avatar][:picture])
      @user = current_user
      render 'api/users/show'
    else
      render json: ['Incorrect Avatar Change Request'], status: 404
    end
  end

  def update
    current_user.avatar.purge
    current_user.avatar.attach(params[:frame][:avatar])
  end

  def destroy
    current_user.avatar.purge
  end

end
