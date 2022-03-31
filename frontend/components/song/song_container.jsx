import {connect} from 'react-redux';
import { fetchSong } from '../../actions/song';
import { fetchArtist } from '../../actions/artist';
import Song from './song';


const mSTP = state => ({
  currentSong: state.entities.currentSong.currentSong,

})

const mDTP = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchArtist: id => dispatch(fetchArtist(id))
})

export default connect(mSTP, mDTP)(Song)