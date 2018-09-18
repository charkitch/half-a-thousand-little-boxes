class Api::FramesController < ApplicationController

  def create
    @frame = Frame.new(frame_params)
    @frame.image.attach(io: params[:frame][:picture], filename: params[:frame][:title] + '.jpg')
    if @frame.save
      render :index
    else
      render json: @frame.errors.full_messages, status: 422
    end
  end

  def show
    @frame = Frame.find(params[:id])
    render :show
  end

  def index
    @frames = Frame.all
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
    byebug
    params.require(:frame).permit(:photographer_id, :caption, :title)
  end



end
