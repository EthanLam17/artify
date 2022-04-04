import {connect} from 'react-redux';
import Playlist from './playlist';
import { fetchAllPlaylists, fetchPlaylist } from '../../actions/playlist';
import { fetchAllSongs, fetchSong } from '../../actions/song';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlist,
  currentSong: state.entities.currentSong
})

const mDTP = dispatch => ({
  fetchPlaylist: (id => dispatch(fetchPlaylist(id))),
  fetchAllPlaylists: (() => dispatch(fetchAllPlaylists)),
  fetchAllSongs: () => dispatch(fetchAllSongs),
  fetchSong: id => dispatch(fetchSong(id)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Playlist);