import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar_container';
import AlbumIndex from '../album/album_index';


class Home extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
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
    }

    
    render() {
        const {currentSong} = this.props
        if (!currentSong) return null;
        
        return (
            <div className="home">
                <div className='home-contents'>
                    <div className='home-recent-grid'>
                        <div className='home-recent-grid-item'>Playlist #1</div>
                        <div className='home-recent-grid-item'>Playlist #2</div>
                        <div className='home-recent-grid-item'>Playlist #3</div>
                        <div className='home-recent-grid-item'>Playlist #4</div>
                        <div className='home-recent-grid-item'>Playlist #5</div>
                        <div className='home-recent-grid-item'>Playlist #6</div>
                    </div>

                    <div className='home-row'>
                        Discover New Albums!
                        <AlbumIndex 
                            albums={this.state.albums}
                        />
                    </div>         
                </div>
            </div>
        )
    }

}



export default Home