import {connect} from 'react-redux';
import Search from './search';
import { fetchAllSongs, fetchSong } from '../../actions/song';
import { fetchAllAlbums } from '../../actions/album';
import { fetchAllArtists } from '../../actions/artist';

const mSTP = state => ({
  currentUser: state.session.currentUser,
  album: state.entities.album,
  song: state.entities.song,
  artist: state.entities.artist
})

const mDTP = dispatch => ({
  fetchAllSongs: () => dispatch(fetchAllSongs()),
  fetchSong: id => dispatch(fetchSong(id)),
  fetchAllAlbums: () => dispatch(fetchAllAlbums()),
  fetchAllArtists: () => dispatch(fetchAllArtists())
})

export default connect(mSTP, mDTP)(Search)