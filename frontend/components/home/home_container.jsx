import {connect} from 'react-redux'
import Home from './home'
import { fetchAllSongs, fetchSong } from "../../actions/song"



const mSTP = ( state ) => {
    return ({
        currentSong: state.song.currentSong,
    })
}



const mDTP = dispatch => {
    return ({
        fetchAllSongs: () => dispatch(fetchAllSongs()),
        fetchSong: id => dispatch(fetchSong(id))
    })
}

export default connect(mSTP, mDTP)(Home)
