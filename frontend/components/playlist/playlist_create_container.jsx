import {connect} from 'react-redux'
import { createPlaylist } from '../../actions/playlist'
import PlaylistCreate from './playlist_create'


const mSTP = state => ({

})

const mDTP = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
})

export default connect(mSTP, mDTP)(PlaylistCreate)