import {connect} from 'react-redux'
import Home from './home'
import { fetchAllSongs, fetchSong } from "../../actions/song"
import { fetchAllAlbums, fetchAlbum } from "../../actions/album"
import { fetchAllPlaylists } from '../../actions/playlist'
import { fetchAllArtists } from '../../actions/artist'



const mSTP = ( state ) => {
    return ({
        currentSong: state.entities.currentSong,
        album: state.entities.album,
        playlist: state.entities.playlist,
        currentUser: state.session.currentUser,
        artist: state.entities.artist
    })
}



const mDTP = dispatch => {
    return ({
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        fetchSong: id => dispatch(fetchSong(id)),
        fetchAllAlbums: () => dispatch(fetchAllAlbums()),
        fetchAlbum: id => dispatch(fetchAlbum(id)),
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        fetchAllArtists: () => dispatch(fetchAllArtists())
    })
}

export default connect(mSTP, mDTP)(Home)
