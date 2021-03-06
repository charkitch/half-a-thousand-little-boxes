class Api::FramesController < ApplicationController

  def create
    @frame = Frame.new(frame_params)
    # @frame.image.attach(io: params[:frame][:picture], filename: params[:frame][:title] + '.jpg')
    @frame.image.attach(params[:frame][:picture])
    @user = current_user
    if @frame.save
      render :show
    else
      render json: @frame.errors.full_messages, status: 422
    end
  end

  def show
    @frame = Frame.includes(:photographer).with_attached_image.find(params[:id])
    @user = @frame.photographer
    render :show
  end

  def index
    @frames = Frame.with_attached_image.where(photographer_id: params[:user_id])
    render :index
  end

  def update
    @frame = Frame.find(params[:id])
    if @frame.update(frame_params)
      @user = current_user
      render :show
    else
      render json: ["invalid edit attempt"], status: 404
    end
  end

  def destroy
    @frame = Frame.find(params[:id])
    if @frame.photographer_id == current_user.id
      if @frame.destroy
        @user = current_user
        render :show
      else
        render json: @frame.errors.full_messages, status: 422
      end

    else
      render json: ["unauthorizied delete request"], status: 404
    end
  end

  private

  def frame_params
    params.require(:frame).permit(:photographer_id, :caption, :title)
  end



end
