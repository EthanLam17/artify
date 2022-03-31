import {connect} from 'react-redux';
import { fetchSong } from '../../actions/song';
import Song from './song';


const mSTP = state => ({
  currentSong: state.entities.currentSong.currentSong,

})

const mDTP = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id))
})

export default connect(mSTP, mDTP)(Song)