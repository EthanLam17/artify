json.extract! @album, :id, :album_title, :artist_id, :songs
# json.songs do 
    # @album.songs.each do |song|
    #     json.set! song.id do 
    #         json.extract! song, :id, :song_title, :album_id, :song_duration
    #         json.mp3 url_for(song.mp3)
    #         json.photoUrl url_for(@album.album_photo)
    #     end
    # end
# end
json.photoUrl url_for(@album.album_photo)


