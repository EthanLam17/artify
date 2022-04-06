import {connect} from 'react-redux'
import Home from './home'
import { fetchAllSongs, fetchSong } from "../../actions/song"
import { fetchAllAlbums, fetchAlbum } from "../../actions/album"



const mSTP = ( state ) => {
    return ({
        currentSong: state.entities.currentSong,
        album: state.entities.album
    })
}



const mDTP = dispatch => {
    return ({
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        fetchSong: id => dispatch(fetchSong(id)),
        fetchAllAlbums: () => dispatch(fetchAllAlbums()),
        fetchAlbum: id => dispatch(fetchAlbum(id))
    })
}

export default connect(mSTP, mDTP)(Home)
