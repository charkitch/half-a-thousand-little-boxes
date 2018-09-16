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

class Frame < ApplicationRecord
  validates :photographer_id, presence: true
  validate :not_empty

  belongs_to :photographer,
  foreign_key: :photographer_id,
  class_name: :User

  has_one_attached :image

  def not_empty
    errors[:image] << 'must be uploaded. This is a photo site!' unless self.image.attached?
  end


end
