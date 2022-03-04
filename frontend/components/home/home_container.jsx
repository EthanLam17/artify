import {connect} from 'react-redux'
import Home from './home'
import { fetchAllSongs, fetchSong } from "../../actions/song"





const mDTP = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchSong: id => dispatch(fetchSong(id))
})

export default connect(null, mDTP)(Home)
