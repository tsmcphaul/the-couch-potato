class RenameRatingToLikesInShows < ActiveRecord::Migration[6.1]
  def up
    rename_column :shows, :rating, :likes
  end

  def down
    rename_column :shows, :likes, :rating
  end
end
