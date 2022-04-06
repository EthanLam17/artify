import React from 'react'


class SongItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying
        }
    }

    setCurrentSong(songId) {
        let currentSongEle = document.getElementById('current-song')
        
        this.props.fetchSong(songId)
   
        .then(() => {
            // currentSongEle.play()
            document.getElementById('current-song').play()
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentSong !== prevProps.currentSong) {
            let progressBar = document.getElementById('progress-bar');
            let currentSong = document.getElementById('current-song');
            currentSong.onloadedmetadata = function() {
                progressBar.max = currentSong.duration
            }
        } else if (this.props.isPlaying !== prevProps.isPlaying) {
            this.setState({
                isPlaying: this.props.isPlaying
            })
        }
    }


    
    toggleSongPlay(songId) {
        this.props.fetchSong(songId)
        .then(() => {
            let currentSong = document.getElementById('current-song');
            let progressBar = document.getElementById('progress-bar');
            let paused = currentSong.paused;
            this.props.fetchArtist(this.props.currentSong.album.artistId)
       
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
                // .then(() => {
                //     this.props.playSong()
                // })
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

    render() {
        let currentSong = document.getElementById('current-song')

        return (
            <div className="song-body-item">
                <div className='song-body-item-left'>

                    <div className='song-body-item-play'>
                        {
                        // (currentSong?.src === this.props.song.url )
                        // (this.props.currentSong?.id === this.props.song.id && currentSong.paused === true)
                        (this.props.currentSong?.id === this.props.song.id && this.state.isPlaying === true)
                        ? 
                        <i onClick={() => this.toggleSongPlay(this.props.song.id)} className="fa-solid fa-pause"></i>
                        :
                        <i onClick={() => this.toggleSongPlay(this.props.song.id)} className="fa-solid fa-play"></i>
                        }
                    </div>

                    <audio src={this.props.song.songUrl} />
                    <div>{this.props.song.songTitle}</div>
                </div>
                <div className='song-length'>{this.props.song.songDuration}</div>

                <div className='song-dropdown'>
                    <button className='song-dropdown-main'>
                        <i className="fa-solid fa-ellipsis"></i>      
                    </button>

                    <div className='song-dropdown-menu'>

                        <div className="playlist-dropdown-main">Add to playlist

                        <div className='playlist-dropdown-menu'>
                            <div>All playlists</div>
                        </div>

                        </div>

                    </div>


                </div>
            </div>
        )
    }
}

export default SongItem