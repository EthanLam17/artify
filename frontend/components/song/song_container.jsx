import {connect} from 'react-redux';
import { fetchSong, playSong, pauseSong } from '../../actions/song';
import { fetchArtist } from '../../actions/artist';
import Song from './song';


const mSTP = state => ({
  currentSong: state.entities.currentSong.currentSong,
  isPlaying: state.entities.currentSong.isPlaying
})

const mDTP = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  playSong: () => dispatch(playSong()),
  pauseSong: () => dispatch(pauseSong())
})

export default connect(mSTP, mDTP)(Song)