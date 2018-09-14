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

  belongs_to :photographer

  has_one_attached :image

end
