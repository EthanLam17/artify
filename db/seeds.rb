# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Song.destroy_all
Album.destroy_all
Artist.destroy_all

# Users
demo = User.create(username: 'demo', email: 'demo', password: 'password')


# Artists
artist1 = Artist.create(artist_name: "Chris Brown", genre: "R&B")



# Albums
slimeb = Album.create(album_title: 'Slime & B', artist_id: artist1.id)
slimeb_file = open('https://s3.amazonaws.com/artify-seeds/slimeb_photo.jpg')

slimeb.album_photo.attach(io:slimeb_file, filename: "slimeb_photo.jpg")


# Songs

song1 = Song.create(song_title: "Go Crazy", album_id: slimeb.id)
song1.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/go_crazy.mp3'), filename:"go_crazy.mp3")

song2 = Song.create(song_title: "Say You Love Me", album_id: slimeb.id)
song2.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/say_you_love_me.mp3'), filename:"say_you_love_me.mp3")

