class Api::FramesController < ApplicationController

  def create
    @frame = Frame.new(frame_params)
    @frame.image.attach(io: params[:frame][:picture], filename: params[:frame][:title] + '.jpg')
    if @frame.save
      debugger
      render :show
    else
      render json: @frame.errors.full_messages, status: 422
    end
  end

  def show
    @frame = Frame.includes(:photographer).find(params[:id])
    @user = @frame.photographer
    render :show
  end

  def index
    @frames = Frame.where(photographer_id: params[:user_id]).with_attached_image
    render :index
  end

  def edit
    @frame = Frame.find(params[:id])
    if @frame
      render :edit
    else
      render json: ["invalid edit attempt"], status: 404
    end
  end

  def destroy

  end

  private

  def frame_params
    params.require(:frame).permit(:photographer_id, :caption, :title)
  end



end
