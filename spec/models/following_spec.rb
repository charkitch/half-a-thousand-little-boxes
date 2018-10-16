# == Schema Information
#
# Table name: followings
#
#  id          :bigint(8)        not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Following, type: :model do
  # describe "inability to follow self" do
  #   it 'should not be able to use the same ID'
  #
  #   end
  #
  #   it 'should allow for unfollowing' do
  #
  #   end
  #
  #   it 'should allow for refollowing' do
  #
  #   end
  # end

  it { should belong_to(:follower) }
  it { should belong_to(:followee) }

end
