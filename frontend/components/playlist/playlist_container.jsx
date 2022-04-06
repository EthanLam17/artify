import {connect} from 'react-redux';
import Playlist from './playlist';
import { fetchAllPlaylists, fetchPlaylist, deletePlaylist } from '../../actions/playlist';
import { fetchAllSongs, fetchSong } from '../../actions/song';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlist,
  currentSong: state.entities.currentSong,
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  fetchPlaylist: (id => dispatch(fetchPlaylist(id))),
  fetchAllPlaylists: (() => dispatch(fetchAllPlaylists())),
  fetchAllSongs: () => dispatch(fetchAllSongs),
  fetchSong: id => dispatch(fetchSong(id)),
  openModal: modal => dispatch(openModal(modal)),
  deletePlaylist: id => dispatch(deletePlaylist(id))
})

export default connect(mSTP, mDTP)(Playlist);