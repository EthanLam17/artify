
export const getPlaylist = id => (
  $.ajax({
    url: `/api/playlists/${id}`,
    method: 'GET'
  })
)

export const getAllPlaylists = () => (
  $.ajax({
    url: '/api/playlists',
    method: 'GET'
  })
)

export const createPlaylist = playlist => (
  $.ajax({
    url: '/api/playlists',
    method: 'POST',
    data: playlist
  })
)

export const destroyPlaylist = id => (
  $.ajax({
    url: `/api/playlists/${id}`,
    method: 'DELETE'
  })
)

