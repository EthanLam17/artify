import React from 'react';
import AlbumIndex from '../album/album_index';
import BigPlaylistItem from '../playlist/big_playlist_item';


class Home extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            playlists: []
        }
    }

    componentDidMount() {
        this.props.fetchAllArtists()
        this.props.fetchAllAlbums()
        .then(state => {
                
                let albumRow = []
                while (albumRow.length < 18) {
                    let albumIndex = Math.floor(Math.random() * Object.keys(state.albums).length)
                    if (!albumRow.includes(Object.values(state.albums)[albumIndex])) {
                        albumRow.push(Object.values(state.albums)[albumIndex])
                    }
                }
                this.setState({
                    albums: albumRow
                })
            })
            this.props.fetchAllPlaylists()
            .then(() => {
                let userPlaylists = []
                Object.values(this.props.playlist.allPlaylists).forEach(playlist => {
                    if (playlist.userId === this.props.currentUser.id && userPlaylists.length < 6) {
                        userPlaylists.push(playlist)
                    }
                })
                this.setState({
                    playlists: userPlaylists
                })
            })
    }

    
    render() {
        const {currentSong} = this.props
        if (!currentSong) return null;
        
        return (
            <div className="home">
                <div className='home-contents'>
                    <div className='home-recent-grid'>
                        {
                        this.state.playlists?.map(playlist => (
                            <BigPlaylistItem playlist={playlist}/>
                        ))
                        }
                        {/* <div className='home-recent-grid-item'>Playlist #1</div>
                        <div className='home-recent-grid-item'>Playlist #2</div>
                        <div className='home-recent-grid-item'>Playlist #3</div>
                        <div className='home-recent-grid-item'>Playlist #4</div>
                        <div className='home-recent-grid-item'>Playlist #5</div>
                        <div className='home-recent-grid-item'>Playlist #6</div> */}
                    </div>

                    <div className='home-row'>
                        Discover New Albums!
                        <AlbumIndex 
                            albums={this.state.albums}
                            artist = {this.props.artist}
                        />
                    </div>         
                </div>
            </div>
        )
    }

}



export default Home