class Show < ApplicationRecord
    belongs_to :genre
    validates_presence_of :title, :network, :year, :season, :image_link, :genre_id
end
