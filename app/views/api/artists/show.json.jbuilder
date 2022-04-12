
json.extract! @artist, :id, :artist_name, :genre
json.albums do 
  @artist.albums.each do |album| 
    json.set! album.id do 
      json.extract! album, :id, :album_title, :artist_id, :songs
    end
  end
end