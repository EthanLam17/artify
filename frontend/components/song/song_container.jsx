import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSong, playSong, pauseSong } from '../../actions/song';
import { fetchArtist } from '../../actions/artist';
import Song from './song';
import { fetchAllPlaylists } from '../../actions/playlist';
import { createPlaylistSong, deletePlaylistSong } from '../../actions/playlist_song';


const mSTP = state => ({
  currentSong: state.entities.currentSong.currentSong,
  isPlaying: state.entities.currentSong.isPlaying,
  playlist: state.entities.playlist,
  currentUser: state.session.currentUser,
  playlistSong: state.entities.playlistSong
})

const mDTP = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong()),
  fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
  createPlaylistSong: playlist_song => createPlaylistSong(playlist_song),
  deletePlaylistSong: id => deletePlaylistSong(id)
})

export default withRouter(connect(mSTP, mDTP)(Song))