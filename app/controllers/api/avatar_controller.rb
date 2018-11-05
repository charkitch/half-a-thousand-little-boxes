class Api::AvatarController < ApplicationController

  def create
    user_without_face = current_user
    user_without_face.avatar.attach(params[:frame][:avatar])
  end

  def update
    current_user.avatar.purge
    current_user.avatar.attach(params[:frame][:avatar])
  end

  def destroy
    current_user.avatar.purge
  end

end
