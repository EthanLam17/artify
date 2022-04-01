
export const getPlaylist = id => (
  $.ajax({
    url: `/api/playlist/${id}`,
    method: GET
  })
)

export const getAllPlaylists = () => (
  $.ajax({
    url: '/api/playlist',
    method: GET
  })
)

export const createPlaylist = playlist => (
  $.ajax({
    url: '/api/playlist',
    method: POST,
    data: playlist
  })
)

export const destroyPlaylist = id => (
  $.ajax({
    url: `/api/playlist/${id}`,
    method: DELETE
  })
)

