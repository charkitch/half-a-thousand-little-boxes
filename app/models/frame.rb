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
  # validate :not_empty

  belongs_to :photographer,
  foreign_key: :photographer_id,
  class_name: :User

  has_one_attached :image
  after_create :create_thumbnail, :create_fairly_large

  def create_thumbnail
    self.image.variant(resize: '100 X 100')#.processed.service_url
  end

  def create_fairly_large
    self.image.variant(resize: '500 X 500')
  end

  def create_large
    self.image.variant(resize: '2000 X 2000')
  end

  def thumbnail
    return self.image.variant(resize: '100 X 100')
  end

  # def not_empty
  #   errors[:image] << 'must be uploaded. This is a photo site!' unless self.image.attached?
  # end


end
