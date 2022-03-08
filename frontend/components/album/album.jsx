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
        // this.setCurrentSong = this.setCurrentSong.bind(this)
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
        // .then(() => this.props.fetchSong(1)) //PRESETS CURRENT SONG TO A SONG
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.currentSong !== prevProps.currentSong) {
    //         debugger
            
    //         this.setState({
    //             currentSong: this.state.currentSong
    //         })
    //     }
        
    // }

    // setCurrentSong(song) {
    //     this.setState({
    //         currentSong: song
    //     })
    // }

    // selectSong = (e) => {
    //     this.setState({currentSong: e.target.value})
    // }

    // playSong(e) {
    //     e.stopPropagation()
    //     let playing = document.getElementById("current-song").paused

    //     if (playing) {
    //         document.getElementById('current-song').play()
    //     } else {
    //         document.getElementById('current-song').pause()
    //     }
    // }
    
    render () {
        
        const {currentSong} = this.props
        
        if (!this.props.album) return null


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
                                    <i onClick={() => this.setState({currentSong: song})} className="fa-solid fa-play"></i>
                                    <div>{song.songTitle}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <SoundbarContainer currentSong={this.state.currentSong}/> */}
            </div>
        )
    }
}

export default Album



// click on song. song becomes current song in overall state. 
// song's url becomes audio source for soundbar. 