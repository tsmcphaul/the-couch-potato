class ShowSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :network, :year, :season, :image_link, :rating, :genre_id
  belongs_to :genre
end
