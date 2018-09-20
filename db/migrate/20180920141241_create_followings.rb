class CreateFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    add_index :followings, :followee_id
    add_index :followings, :follower_id
  end
end
