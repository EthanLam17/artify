
json.extract! @playlist, :id, :playlist_name, :user_id

json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :song_title, :album_id, :song_duration, :album, :artist
    end
  end
end

json.playlist_songs do 
  @playlist.playlist_songs.each do |playlist_song|
    if playlist_song.playlist_id === @playlist.id
      json.set! playlist_song.id do 
        json.extract! playlist_song, :id, :playlist_id, :song_id
      end
    end
  end
end