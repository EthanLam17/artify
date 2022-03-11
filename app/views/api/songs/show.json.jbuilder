
json.extract! @song, :id, :song_title, :album_id, :song_duration
json.album do 
    json.extract! @song.album, :album_title, :artist_id, :album_photo
    json.photoUrl url_for(@song.album.album_photo)
end

json.songUrl url_for(@song.mp3)

