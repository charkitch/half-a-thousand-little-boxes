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

require 'rails_helper'

RSpec.describe Frame, type: :model do

  describe 'image' do
    it 'has one attached through active storage' do
      jasps = User.create(email: 'jelk@jelk', password: 'jelkjelk')
      testing_frame = Frame.create!(photographer_id: jasps.id)
      testing_frame.image.attach(io: File.open(Rails.root + 'app/assets/images/user.svg'), filename: 'user.svg', content_type: 'image/svg')
      expect(testing_frame.image).to be_attached
    end
  end


  it { should belong_to(:photographer) }

  it { should have_db_index(:photographer_id)}
  it { should have_db_index(:title)}
  it { should have_db_index(:caption)}

end
