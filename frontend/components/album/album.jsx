import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import Sidebar from '../sidebar/sidebar'
import SoundbarContainer from '../soundbar/soundbar_container'

class Album extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            songs: []
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
        .then(() => this.props.fetchSong(1))
    }
    
    render () {
        return (
            <div className='album-show-container'>
                <NavBarContainer/>
                <div className='body-show'>
                    <Sidebar />
                    <div className='album-page'>
                        <div className='album-header'>
                            <img className="header-image" src={this.props.album.photoUrl}></img>
                            
                            <div className='header-info'>
                                <div>ALBUM</div>
                                <div className='page-title'>{this.props.album.albumTitle}</div>
                            </div>
                        </div>
                
                        <ul className='album-body'>
                            {this.state.songs.map((song, index) => (
                                <li className="album-body-item" key={index}>
                                    <div>{song.songTitle}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <SoundbarContainer />
            </div>
        )
    }
}

export default Album