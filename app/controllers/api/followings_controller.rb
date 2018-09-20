class FollowingsController < ApplicationController

  def create
    Following.new(following_params)
  end

  private

  def following_params
      params.require(:following).permit(:follower_id, :followee_id)
  end

end
