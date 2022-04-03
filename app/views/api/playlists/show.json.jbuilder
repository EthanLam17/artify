
json.extract! @playlist, :id, :playlist_name, :user_id
json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :song_title, :album_id, :song_duration
    end
  end
end