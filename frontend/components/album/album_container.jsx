import {connect} from 'react-redux'
import { fetchAllAlbums, fetchAlbum } from '../../actions/album'
import { queueAlbum } from '../../actions/queue_actions'
import { fetchArtist } from '../../actions/artist'
import { fetchAllSongs, fetchSong, playSong } from '../../actions/song'
import Album from './album'


const mSTP = (state, ownProps) => ({
    // album: state.entities.album[ownProps.match.params.albumId],
    album: state.entities.album,
    currentSong: state.entities.currentSong,
    queue: state.entities.queue.queue
})


const mDTP = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchAlbum: (id => dispatch(fetchAlbum(id))),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    queueAlbum: (album) => dispatch(queueAlbum(album)),
    playSong: () => dispatch(playSong())
})

export default connect(mSTP, mDTP)(Album);