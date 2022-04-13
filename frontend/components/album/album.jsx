import React from 'react'
import Song from '../song/song_container'

class Album extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
        }
        this.toggleSongPlay = this.toggleSongPlay.bind(this)
        this.playAlbum = this.playAlbum.bind(this)
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
    
    playAlbum() {
        this.props.queueAlbum(this.state.songs)
        this.toggleSongPlay(this.state.songs[0].id)
        
    }

    toggleSongPlay(songId) {
        this.props.fetchSong(songId)
        .then(() => {
            let currentSong = document.getElementById('current-song');
            let progressBar = document.getElementById('progress-bar');
            let paused = currentSong.paused;
            this.props.fetchArtist(this.props.currentSong.currentSong.album.artistId)
            
            if (currentSong) {
                currentSong.addEventListener('timeupdate', function() {
                    progressBar.value = Math.floor(currentSong.currentTime)
                })
            }
            
            
            const doTime = (secs) => {
                let minutes = Math.floor(secs / 60)
                let returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
        
                let seconds = Math.floor(secs % 60);
                let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        
                return `${returnedMinutes} : ${returnedSeconds}`;
            }
            
            if (paused) {
                currentSong.play()
                currentSong.volume = 0.5
                this.props.playSong()
                currentSong.addEventListener("timeupdate", function() {
                    let timeDisplay = doTime(currentSong.currentTime);
                    document.getElementById('time-display').innerHTML = timeDisplay;
                   
                })
            } else {
                currentSong.pause()
                this.props.pauseSong()
            }    
        })

    }
    
    render () {
             
        if (!this.props.album.currentAlbum) return null


        return (
            <div className='album-show-container'>
                <div className='album-page'>
                    <div className='album-header'>
                        <img className="header-image" src={this.props.album.currentAlbum.photoUrl}></img>
                        
                        <div className='header-info'>
                            <div>ALBUM</div>
                            <div className='album-title'>{this.props.album.currentAlbum.albumTitle}</div>
                        </div>
                    </div>

                    <div className='album-controls'>
                        <i className="fa-solid fa-circle-play fa-3x" onClick={() => this.playAlbum()} ></i>
                    </div>
            
                    <ul className='album-body'>
                        {this.state.songs.map((song, index) => (
                            <li key={index}>
                                <Song song={song}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Album


