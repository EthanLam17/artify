import * as PlaylistUtil from '../utils/playlist';


export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const NEW_PLAYLIST = "NEW_PLAYLIST"

// ACTION CREATORS

const receivePlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
})

const receivePlaylist = playlist => {
  return ({
    type: RECEIVE_PLAYLIST,
    playlist
  }
  )
}

const newPlaylist = playlist => {
  return ({
    type: NEW_PLAYLIST,
    playlist
  })
}

// THUNK ACTION

export const fetchAllPlaylists = () => dispatch => {
return (
  PlaylistUtil.getAllPlaylists()
  .then(playlists => dispatch(receivePlaylists(playlists)))
)}


export const fetchPlaylist = id => dispatch => (
  PlaylistUtil.getPlaylist(id)
  .then(playlist => dispatch(receivePlaylist(playlist)))
)

export const createPlaylist = playlist => dispatch => {
  return (
    PlaylistUtil.createPlaylist(playlist)
    .then(playlist => dispatch(newPlaylist(playlist)))  
  )
}

export const deletePlaylist = id => dispatch => (
  PlaylistUtil.destroyPlaylist(id)
)

export const updatePlaylist = playlist => dispatch => {
  return (
    PlaylistUtil.updatePlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
  )  
}
