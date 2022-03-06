import {connect} from 'react-redux'
import { fetchAllAlbums, fetchAlbum } from '../../actions/album'
import Album from './album'


const mSTP = state => ({

})


const mDTP = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchAlbum: (id => dispatch(fetchAlbum(id)))
})

export default connect(mSTP, mDTP)(Album);