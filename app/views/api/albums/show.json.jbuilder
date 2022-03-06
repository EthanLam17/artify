json.extract! @album, :id, :album_title, :artist_id, :songs
json.photoUrl url_for(@album.album_photo)

