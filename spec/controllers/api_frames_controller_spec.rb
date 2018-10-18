require 'rails_helper'

RSpec.describe Api::FramesController, type: :controller do

  describe '#index' do
    before { get :index }
    it { should respond_with(200)}
  end


  it { should filter_param(:frame) }
end
