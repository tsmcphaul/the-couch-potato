class ShowSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :network, :year, :season, :image_link, :likes, :genre_id
  belongs_to :genre
end
