import {connect} from 'react-redux';
import Playlist from './playlist';
import { fetchAllPlaylists, fetchPlaylist, deletePlaylist } from '../../actions/playlist';
import { fetchAllSongs, fetchSong, playSong } from '../../actions/song';
import { openModal } from '../../actions/modal_actions';
import { fetchArtist } from '../../actions/artist';
import { queuePlaylist } from '../../actions/queue_actions';
import { fetchPlaylistSongs } from '../../actions/playlist_song';


const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlist,
  currentSong: state.entities.currentSong,
  currentUser: state.session.currentUser,
  queue: state.entities.queue.queue,
  playlistSongs: state.entities.playlistSong
})

const mDTP = dispatch => ({
  fetchPlaylist: (id => dispatch(fetchPlaylist(id))),
  fetchAllPlaylists: (() => dispatch(fetchAllPlaylists())),
  fetchAllSongs: () => dispatch(fetchAllSongs),
  fetchSong: id => dispatch(fetchSong(id)),
  openModal: modal => dispatch(openModal(modal)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  queuePlaylist: playlist => dispatch(queuePlaylist(playlist)),
  playSong: () => dispatch(playSong()),
  fetchPlaylistSongs: () => dispatch(fetchPlaylistSongs())
})

export default connect(mSTP, mDTP)(Playlist);