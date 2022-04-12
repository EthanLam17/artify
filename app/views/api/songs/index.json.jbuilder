@songs.each do |song|
    json.set! song.id do 
        json.extract! song, :id, :song_title, :album_id, :song_duration, :album, :artist
        json.url url_for(song.mp3)
    end
end