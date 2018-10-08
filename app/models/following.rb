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

class Following < ApplicationRecord

  validates :follower_id, uniqueness: { scope: :followee_id }
  validate :cannot_follow_self

  belongs_to :follower,
  foreign_key: :follower_id,
  class_name: :User

  belongs_to :followee,
  foreign_key: :followee_id,
  class_name: :User

  def cannot_follow_self
    if follower_id == followee_id
      errors.add(:followee_id, 'cannot refer to follower. You cannot follow yourself.')
    end
  end

end
