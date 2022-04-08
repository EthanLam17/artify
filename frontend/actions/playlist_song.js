import * as PlaylistSongUtil from '../utils/playlist_song';

export const RECEIVE_PLAYLIST_SONGS = "RECEIVE_PLAYLIST_SONGS"

const receivePlaylistSongs = playlistSongs => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs
})


export const fetchPlaylistSongs = () => dispatch => (
  PlaylistSongUtil.getPlaylistSongs()
  .then(playlistSongs => dispatch(receivePlaylistSongs(playlistSongs)))
)

export const createPlaylistSong = playlist_song => (
  PlaylistSongUtil.createPlaylistSong(playlist_song)
)


export const deletePlaylistSong = id => (
  PlaylistSongUtil.destroyPlaylistSong(id)
)