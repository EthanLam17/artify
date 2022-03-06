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

# Users
demo = User.create(username: 'demo', email: 'demo', password: 'password')

# Albums
slimeb = Album.create(album_title: 'Slime & B', artist_id: 1)
slimeb_file = open('https://s3.amazonaws.com/artify-seeds/slimeb_photo.jpg')

slimeb.album_photo.attach(io:slimeb_file, filename: "slimeb_photo.jpg")

# Songs

go_crazy = Song.create(song_title: "Go Crazy", album_id: 1)
go_crazy_file = open('https://s3.amazonaws.com/artify-seeds/go_crazy.mp3')


go_crazy.mp3.attach(io: go_crazy_file, filename:"go_crazy.mp3")

