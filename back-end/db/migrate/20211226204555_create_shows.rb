class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :network
      t.integer :year
      t.integer :season
      t.text :image_link
      t.integer :rating
      t.integer :genre_id

      t.timestamps
    end
  end
end
