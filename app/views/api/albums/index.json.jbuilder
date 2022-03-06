@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :album_title, :artist_id
        json.url url_for(album.album_photo)
    end
end