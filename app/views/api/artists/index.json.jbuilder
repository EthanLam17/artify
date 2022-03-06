@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :artist_name, :genre
        json.url url_for(artist.artist_photo)
    end
end