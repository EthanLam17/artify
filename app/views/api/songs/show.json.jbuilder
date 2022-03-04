
json.extract! @song, :id, :song_title, :album_id
json.songUrl url_for(@song.mp3)

