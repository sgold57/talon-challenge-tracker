class DeletePhotoFromTrails < ActiveRecord::Migration[6.1]
  def change
    remove_column :trails, :photo
  end
end
