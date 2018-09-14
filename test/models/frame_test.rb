# == Schema Information
#
# Table name: frames
#
#  id              :bigint(8)        not null, primary key
#  photographer_id :integer          not null
#  caption         :text
#  title           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class FrameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
