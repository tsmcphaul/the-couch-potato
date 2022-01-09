class Genre < ApplicationRecord
    has_many :shows
    validates_presence_of :name
end
