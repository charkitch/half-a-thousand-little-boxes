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
  after_create :create_thumbnail, :create_fairly_large_image

  def thumbnail
    self.image.variant(resize: '100 X 100', auto_orient: true)
  end

  def fairly_large_image
    self.image.variant(resize: '500 X 500', auto_orient: true)
  end

  def true_image
    if self.image.metadata && self.image.metadata['orientation'] != 1
      self.image.variant(resize: '1200 x 1200', auto_orient: true)
    else
      self.image.variant(resize: '1200 X 1200')
    end
  end

  def create_thumbnail
    thumbnail.processed
    @thumb_made = true
  end

  def create_fairly_large_image
    fairly_large_image.processed
    @middling_made = true
  end

  def create_true_image
    true_image.processed
  end

end
