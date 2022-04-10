import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSong, playSong, pauseSong } from '../../actions/song';
import { fetchArtist } from '../../actions/artist';
import Song from './song';
import { fetchAllPlaylists, fetchPlaylist } from '../../actions/playlist';
import { createPlaylistSong, deletePlaylistSong } from '../../actions/playlist_song';
import { queueAlbum, queuePlaylist } from '../../actions/queue_actions';


const mSTP = state => ({
  currentSong: state.entities.currentSong.currentSong,
  isPlaying: state.entities.currentSong.isPlaying,
  playlist: state.entities.playlist,
  currentUser: state.session.currentUser,
  playlistSong: state.entities.playlistSong,
  album: state.entities.album
})

const mDTP = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  createPlaylistSong: playlist_song => createPlaylistSong(playlist_song),
  deletePlaylistSong: id => deletePlaylistSong(id),
  queuePlaylist: playlist => dispatch(queuePlaylist(playlist)),
  queueAlbum: album => dispatch(queueAlbum(album))
})

export default withRouter(connect(mSTP, mDTP)(Song))