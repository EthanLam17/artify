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
Playlist.destroy_all
PlaylistSong.destroy_all

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
artist9 = Artist.create(artist_name: "One Direction", genre: "Pop")
artist10 = Artist.create(artist_name: "Nav", genre: "Hip-Hop")
artist11 = Artist.create(artist_name: "Lil Uzi Vert", genre: "Hip-Hop")
artist12 = Artist.create(artist_name: "PnB Rock", genre: "Hip-Hop")
artist13 = Artist.create(artist_name: "Ariana Grande", genre: "Pop")



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

album6 = Album.create(album_title: 'True 2 Myself', artist_id: artist3.id)
album6.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/true_2_myself_photo.png'), filename: "true_2_myself_photo.png")

album7 = Album.create(album_title: 'Punk', artist_id: artist7.id)
album7.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/punk_photo.jpg'), filename: "punk_photo.jpg")

album8 = Album.create(album_title: 'Purpose', artist_id: artist8.id)
album8.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/purpose_photo.jpg'), filename: "purpose_photo.jpg")

album9 = Album.create(album_title: 'THE GOAT', artist_id: artist4.id)
album9.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/the_goat_photo.jpg'), filename: "the_goat_photo.jpg")

album10 = Album.create(album_title: 'Take Me Home', artist_id: artist9.id)
album10.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/take_me_home_photo.png'), filename: "take_me_home_photo.png")

album11 = Album.create(album_title: 'Changes', artist_id: artist8.id)
album11.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/changes_photo.png'), filename: "changes_photo.png")

album12 = Album.create(album_title: 'Hoodie SZN', artist_id: artist2.id)
album12.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/hoodie_szn_photo.jpg'), filename: "hoodie_szn_photo.jpg")

album13 = Album.create(album_title: 'The Bigger Artist', artist_id: artist2.id)
album13.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/the_bigger_artist_photo.jpg'), filename: "the_bigger_artist_photo.jpg")

album14 = Album.create(album_title: 'Good Intentions', artist_id: artist10.id)
album14.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/good_intentions_photo.png'), filename: "good_intentions_photo.png")

album15 = Album.create(album_title: 'Luv Is Rage 2', artist_id: artist11.id)
album15.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/luv_is_rage_2_photo.jpg'), filename: "luv_is_rage_2_photo.jpg")

album16 = Album.create(album_title: 'GTTM: Goin Thru the Motions', artist_id: artist12.id)
album16.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/gttm_photo.jpg'), filename: "gttm_photo.jpg")

album17 = Album.create(album_title: 'thank u, next', artist_id: artist13.id)
album17.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/thank_u_next_photo.png'), filename: "thank_u_next_photo.png")

album18 = Album.create(album_title: 'TrapStar Turnt PopStar', artist_id: artist12.id)
album18.album_photo.attach(io: open('https://s3.amazonaws.com/artify-seeds/trapstar_turnt_popstar_photo.png'), filename: "trapstar_turnt_popstar_photo.png")



# Songs

song1 = Song.create(song_title: "Go Crazy", album_id: album1.id, song_duration: "2:56")
song1.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/go_crazy.mp3'), filename:"go_crazy.mp3")

song2 = Song.create(song_title: "Say You Love Me", album_id: album1.id, song_duration: "2:52")
song2.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/say_you_love_me.mp3'), filename:"say_you_love_me.mp3")

song3 = Song.create(song_title: "City Girls", album_id: album1.id, song_duration: "3:49")
song3.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/city_girls.mp3'), filename:"city_girls.mp3")



song4 = Song.create(song_title: "Glasses", album_id: album2.id, song_duration: "3:22")
song4.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/glasses.mp3'), filename:"glasses.mp3")

song5 = Song.create(song_title: "Man in the Mirror", album_id: album2.id, song_duration: "3:38")
song5.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/man_in_the_mirror.mp3'), filename:"man_in_the_mirror.mp3")

song6 = Song.create(song_title: "Making You Cry", album_id: album2.id, song_duration: "3:51")
song6.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/making_you_cry.mp3'), filename:"making_you_cry.mp3")



song7 = Song.create(song_title: "Rich & Sad", album_id: album3.id, song_duration: "3:30")
song7.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/rich_and_sad.mp3'), filename:"rich_and_sad.mp3")

song8 = Song.create(song_title: "What You Wanna Do", album_id: album4.id, song_duration: "4:05")
song8.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/what_you_wanna_do.mp3'), filename:"what_you_wanna_do.mp3")

song9 = Song.create(song_title: "Paradise", album_id: album5.id, song_duration: "3:49")
song9.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/paradise.mp3'), filename:"paradise.mp3")

song10 = Song.create(song_title: "Leaked", album_id: album6.id, song_duration: "3:43")
song10.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/leaked.mp3'), filename:"leaked.mp3")

song11 = Song.create(song_title: "Hate The Game", album_id: album7.id, song_duration: "2:44")
song11.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/hate_the_game.mp3'), filename:"hate_the_game.mp3")

song12 = Song.create(song_title: "Love Yourself", album_id: album8.id, song_duration: "3:53")
song12.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/love_yourself.mp3'), filename:"love_yourself.mp3")

song13 = Song.create(song_title: "Martin & Gina", album_id: album9.id, song_duration: "3:17")
song13.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/martin_and_gina.mp3'), filename:"martin_and_gina.mp3")

song14 = Song.create(song_title: "Magic", album_id: album10.id, song_duration: "3:05")
song14.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/magic.mp3'), filename:"magic.mp3")

song15 = Song.create(song_title: "Intentions", album_id: album11.id, song_duration: "3:46")
song15.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/intentions.mp3'), filename:"intentions.mp3")

song16 = Song.create(song_title: "Swervin", album_id: album12.id, song_duration: "3:08")
song16.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/swervin.mp3'), filename:"swervin.mp3")

song17 = Song.create(song_title: "Say A", album_id: album13.id, song_duration: "3:08")
song17.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/say_a.mp3'), filename:"say_a.mp3")

song18 = Song.create(song_title: "Saint Laurenttt", album_id: album14.id, song_duration: "2:50")
song18.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/saint_laurenttt.mp3'), filename:"saint_laurenttt.mp3")

song19 = Song.create(song_title: "The Way Life Goes", album_id: album15.id, song_duration: "4:31")
song19.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/the_way_life_goes.mp3'), filename:"the_way_life_goes.mp3")

song20 = Song.create(song_title: "Misunderstood", album_id: album16.id, song_duration: "4:08")
song20.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/misunderstood.mp3'), filename:"misunderstood.mp3")

song21 = Song.create(song_title: "NASA", album_id: album17.id, song_duration: "2:53")
song21.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/nasa.mp3'), filename:"nasa.mp3")

song22 = Song.create(song_title: "All These Bands", album_id: album18.id, song_duration: "3:04")
song22.mp3.attach(io: open('https://s3.amazonaws.com/artify-seeds/all_these_bands.mp3'), filename:"all_these_bands.mp3")




playlist1 = Playlist.create(playlist_name: "Demo Songs", user_id: demo.id)
playlist2 = Playlist.create(playlist_name: "Relaxing", user_id: demo.id)
playlist3 = Playlist.create(playlist_name: "Driving", user_id: demo.id)
playlist4 = Playlist.create(playlist_name: "Beats", user_id: demo.id)
playlist5 = Playlist.create(playlist_name: "Gymming", user_id: demo.id)
playlist6 = Playlist.create(playlist_name: "Dancing", user_id: demo.id)


playlist_song1 = PlaylistSong.create(playlist_id: playlist1.id, song_id: song18.id)
playlist_song2 = PlaylistSong.create(playlist_id: playlist1.id, song_id: song11.id)
playlist_song3 = PlaylistSong.create(playlist_id: playlist1.id, song_id: song9.id)
playlist_song4 = PlaylistSong.create(playlist_id: playlist2.id, song_id: song21.id)
playlist_song5 = PlaylistSong.create(playlist_id: playlist2.id, song_id: song20.id)
playlist_song6 = PlaylistSong.create(playlist_id: playlist3.id, song_id: song19.id)