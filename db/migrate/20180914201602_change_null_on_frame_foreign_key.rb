class ChangeNullOnFrameForeignKey < ActiveRecord::Migration[5.2]
  def change
    change_column_null :frames, :photographer_id, false
  end
end
