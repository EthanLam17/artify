import {connect} from 'react-redux';
import Playlist from './playlist';
import { fetchAllPlaylists, fetchPlaylist, deletePlaylist } from '../../actions/playlist';
import { fetchAllSongs, fetchSong, playSong } from '../../actions/song';
import { openModal } from '../../actions/modal_actions';
import { fetchArtist } from '../../actions/artist';
import { queuePlaylist } from '../../actions/queue_actions';


const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlist,
  currentSong: state.entities.currentSong,
  currentUser: state.session.currentUser,
  queue: state.entities.queue.queue
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
  playSong: () => dispatch(playSong())
})

export default connect(mSTP, mDTP)(Playlist);