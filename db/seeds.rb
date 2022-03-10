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
artist2 = Artist.create(artist_name: "A Boogie wit da Hoodie", genre: "Hip-Hop")
artist3 = Artist.create(artist_name: "Lil Tjay", genre: "Hip-Hop")
artist4 = Artist.create(artist_name: "Polo G", genre: "Hip-Hop")
artist5 = Artist.create(artist_name: "Luh Kel", genre: "R&B")
artist6 = Artist.create(artist_name: "Post Malone", genre: "Hip-Hop")
artist7 = Artist.create(artist_name: "Young Thug", genre: "Hip-Hop")
artist8 = Artist.create(artist_name: "Justin Bieber", genre: "Pop")


# Albums
album1 = Album.create(album_title: 'Slime & B', artist_id: artist1.id)
album1.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/slimeb_photo.jpg'), filename: "slimeb_photo.jpg")

album2 = Album.create(album_title: 'B4 AVA', artist_id: artist2.id)
album2.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/b4_ava_photo.jpg'), filename: "b4_ava_photo.jpg")

album3 = Album.create(album_title: 'beerbongs and bentleys', artist_id: artist6.id)
album3.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/beerbongs_and_bentleys_photo.jpg'), filename: "beerbongs_and_bentleys_photo.jpg")

album4 = Album.create(album_title: 'Destined 2 Win', artist_id: artist3.id)
album4.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/destined_2_win_photo.jpg'), filename: "destined_2_win_photo.jpg")

album5 = Album.create(album_title: 'Heartbreak on a Full Moon', artist_id: artist1.id)
album5.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/heartbreak_on_a_full_moon_photo.jpg'), filename: "heartbreak_on_a_full_moon_photo.jpg")

album6 = Album.create(album_title: 'Mixed Emotions', artist_id: artist5.id)
album6.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/mixed_emotions_photo.jpg'), filename: "mixed_emotions_photo.jpg")

album7 = Album.create(album_title: 'Punk', artist_id: artist7.id)
album7.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/punk_photo.jpg'), filename: "punk_photo.jpg")

album8 = Album.create(album_title: 'Purpose', artist_id: artist8.id)
album8.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/purpose_photo.jpg'), filename: "purpose_photo.jpg")

album9 = Album.create(album_title: 'THE GOAT', artist_id: artist4.id)
album9.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/the_goat_photo.jpg'), filename: "the_goat_photo.jpg")


# Songs

song1 = Song.create(song_title: "Go Crazy", album_id: album1.id, song_duration: "02:56")
song1.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/go_crazy.mp3'), filename:"go_crazy.mp3")

song2 = Song.create(song_title: "Say You Love Me", album_id: album1.id, song_duration: "02:52")
song2.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/say_you_love_me.mp3'), filename:"say_you_love_me.mp3")

