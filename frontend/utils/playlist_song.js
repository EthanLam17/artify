export const getPlaylistSongs = () => (
  $.ajax({
    url: '/api/playlist_song',
    method: 'GET'
  })
)


export const createPlaylistSong = playlist_song => (
  $.ajax({
    url: '/api/playlist_song',
    method: 'POST',
    data: playlist_song
  })
)


export const destroyPlaylistSong = id => (
  $.ajax({
    url: `/api/playlist_song/${id}`,
    method: 'DELETE'
  })
)