class CreateFrames < ActiveRecord::Migration[5.2]
  def change
    create_table :frames do |t|
      t.integer :photographer_id
      t.text :caption
      t.string :title

      t.timestamps
    end

    add_index :frames, :photographer_id
    add_index :frames, :caption
    add_index :frames, :title
  end
end
