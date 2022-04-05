import {connect} from'react-redux';
import { fetchAllPlaylists, updatePlaylist } from '../../actions/playlist';
import EditPlaylist from './edit_playlist';
import { closeModal } from '../../actions/modal_actions';


const mSTP = state => ({
  playlist: state.entities.playlist,
  currentUser: state.session.currentUser
})

const mDTP = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  closeModal: () => dispatch(closeModal()),
  fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
})

export default connect(mSTP, mDTP)(EditPlaylist)