# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


thriller = Genre.create( name: "Thriller")
drama = Genre.create( name: "Drama")

Show.create( title: "Squid Games", network: "Netflix", year: 2021, season: 1, image_link: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg", likes: 5, genre_id: thriller.id)
Show.create( title: "The Handmaid's Tale", network: "Hulu", year: 2017, season: 4, image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/The_Handmaid%27s_Tale_intertitle.png/1280px-The_Handmaid%27s_Tale_intertitle.png", likes: 4, genre_id: drama.id)
