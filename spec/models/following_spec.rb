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
  describe "inability to follow self" do
    it 'should validate that you cannot follow yourself.' do
        schmo = User.create(email: 'gary@gary', password: 'gargar')
        x = Following.create(followee_id: schmo.id, follower_id: schmo.id)
        expect(x.errors.full_messages[0]).to eq("Followee cannot refer to follower. You cannot follow yourself.")
  #     jasps = User.create!(email: 'benji@theverybest', password: 'janejane')
  #     Following.create!(followee_id: jasps.id, follower_id: jasps.id)
  #     expect(Following.last.followee_id).to eq(jasps.id)
      # User.last.destroy
    end
  end
  #
  #   it 'should allow for unfollowing' do
  #
  #   end
  #
  #   it 'should allow for refollowing' do
  #
  #   end
  # end

  # it { should validate_uniqueness_of(:follower_id).scoped_to(:followee_id)}
  it { should belong_to(:follower) }
  it { should belong_to(:followee) }

  it { should have_db_column(:followee_id) }
  it { should have_db_column(:follower_id) }
  it { should have_db_column(:created_at) }
  it { should have_db_column(:updated_at) }

  it { should have_db_index(:followee_id) }
  it { should have_db_index(:follower_id) }
  # it { should have_db_index(:follower_id, :followee_id) }

end
