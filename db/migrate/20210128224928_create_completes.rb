class CreateCompletes < ActiveRecord::Migration[6.1]
  def change
    create_table :completes do |t|
      t.references :skier, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true

      t.timestamps
    end
  end
end
