import {connect} from 'react-redux';
import Playlist from './playlist';
import { fetchAllPlaylists, fetchPlaylist } from '../../actions/playlist';
import { fetchAllSongs, fetchSong } from '../../actions/song';



const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlist,
  currentSong: state.entities.currentSong
})

const mDTP = dispatch => ({
  fetchPlaylist: (id => dispatch(fetchPlaylist(id))),
  fetchAllPlaylists: (() => dispatch(fetchAllPlaylists)),
  fetchAllSongs: () => dispatch(fetchAllSongs),
  fetchSong: (id) => dispatch(fetchSong(id))
})

export default connect(mSTP, mDTP)(Playlist);