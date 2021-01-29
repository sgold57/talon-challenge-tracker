class AddPhotoColumnToTrails < ActiveRecord::Migration[6.1]
  def change
    add_column :trails, :photo, :integer
  end
end
