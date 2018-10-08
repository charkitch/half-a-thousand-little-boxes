class Api::FollowingsController < ApplicationController

  def create
    new_follow = Following.new
    new_follow.followee_id = params[:user_id]
    new_follow.follower_id = current_user.id
    if new_follow.save
      @current_user = current_user
      render 'api/users/show'
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    unfollowing = Following.find_by(followee_id: params[:id], follower_id: current_user.id)
    unless unfollowing
      return render status: 404
    end
    if unfollowing.destroy
      @followees = current_user.followee_ids
      render json: @followees, status: 200
    else
      render status: 422
    end
  end

end
