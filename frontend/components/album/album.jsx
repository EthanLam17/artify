import React from 'react'
import Song from '../song/song'

class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
        }
    }

    componentDidMount() {
        
        let albumSession = this.props.match.params.albumId;
        this.props.fetchAlbum(albumSession)
        .then(() => this.props.fetchAllSongs())
        .then(state => {
            let albumSongs = []
            Object.values(state.songs).forEach(song => {
                if (song.albumId === parseInt(albumSession)) {
                    albumSongs.push(song)
                }
            }) 
            this.setState({
                songs: albumSongs
            })            
        })
    }


    
    render () {
        
        if (!this.props.album) return null


        return (
            <div className='album-show-container'>
                <div className='album-page'>
                    <div className='album-header'>
                        <img className="header-image" src={this.props.album.photoUrl}></img>
                        
                        <div className='header-info'>
                            <div>ALBUM</div>
                            <div className='page-title'>{this.props.album.albumTitle}</div>
                        </div>
                    </div>

                    <div className='album-controls'>
                        <i className="fa-solid fa-circle-play fa-3x"></i>
                    </div>
            
                    <ul className='album-body'>
                        {this.state.songs.map((song, index) => (
                            <li key={index}>
                                <Song 
                                    song={song}
                                    fetchSong={this.props.fetchSong}
                                    currentSong = {this.props.currentSong}
                                    />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Album


