require 'rails_helper'

RSpec.describe Api::FollowingsController, type: :controller do


  it { should filter_param(:following) }

end
