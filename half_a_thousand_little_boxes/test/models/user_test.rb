# == Schema Information
#
# Table name: users
#
#  id               :bigint(8)        not null, primary key
#  username         :string           not null
#  session_token    :string           not null
#  password_digest  :string           not null
#  email            :string           not null
#  icon_image_url   :string
#  header_image_url :string
#  bio              :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
