import {connect} from 'react-redux'
import { fetchAllAlbums, fetchAlbum } from '../../actions/album'
import { fetchAllSongs, fetchSong } from '../../actions/song'
import Album from './album'


const mSTP = (state, ownProps) => ({
    // album: state.entities.album[ownProps.match.params.albumId],
    album: state.entities.album,
    currentSong: state.entities.currentSong
})


const mDTP = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchAlbum: (id => dispatch(fetchAlbum(id))),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchSong: (id) => dispatch(fetchSong(id))
})

export default connect(mSTP, mDTP)(Album);