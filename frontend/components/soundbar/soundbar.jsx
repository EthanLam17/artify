import React from 'react'


class Soundbar extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying,
            songTime: "0:00",
            max: "",
            queue: []
        }
        this.toggleSongPlay = this.toggleSongPlay.bind(this);
        this.seekRange = this.seekRange.bind(this);
        this.seekVolume = this.seekVolume.bind(this);
        this.calcTime = this.calcTime.bind(this);
        this.songEnd = this.songEnd.bind(this);
        this.nextSong = this.nextSong.bind(this)
        this.prevSong = this.prevSong.bind(this)
    }


    componentDidMount() {
        this.props.fetchSong(this.props.currentSong.id)
        .then (() => {
            let progressBar = document.getElementById('progress-bar');
            let currentSong = document.getElementById('current-song');
            progressBar.max = currentSong?.duration;
        })
        if (this.props.queue) {
            this.setState({
                queue: this.props.queue
            })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.currentSong.currentSong !== prevProps.currentSong.currentSong) {
            let progressBar = document.getElementById('progress-bar');
            let currentSong = document.getElementById('current-song');
            currentSong.onloadedmetadata = function() {
                progressBar.max = currentSong.duration
                this.toggleSongPlay()
            }
        }
        if (this.props.queue !== prevProps.queue) {
            this.setState({
                queue: this.props.queue
            })
        }
    }

    updateTime() {
        let progressBar = document.getElementById('progress-bar');
        let currentSong = document.getElementById('current-song');
        if (currentSong) {
            currentSong.addEventListener('timeupdate', function() {
                progressBar.value = Math.floor(currentSong.currentTime);
            })
        }
    }
    
    
    calcTime(secs) {
        let minutes = Math.floor(secs / 60)
        let returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
        
        let seconds = Math.floor(secs % 60);
        let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        
        return `${returnedMinutes} : ${returnedSeconds}`;
    }
    
    
    seekRange() {
        let currentSong = document.getElementById('current-song')
        let progressBar = document.getElementById("progress-bar")

        currentSong.currentTime = parseInt(progressBar.value);
        progressBar.style.setProperty('--seek-before-width', `${parseInt(progressBar?.value) / document.getElementById('current-song')?.duration * 100}%`)
        // this.setState({songTime : progressBar.value})
    }

    seekVolume() {
        let currentSong = document.getElementById('current-song');
        let volumeBar = document.getElementById("volume-bar");    
        currentSong.volume = parseFloat(volumeBar.value);
    }

    toggleSongPlay(e) {
        e.stopPropagation()
        let currentSong = document.getElementById('current-song');
        let progressBar = document.getElementById('progress-bar');
        let paused = currentSong.paused
        
        this.setState({
            max: currentSong.duration
        })
        
        
        const doTime = (secs) => {
            let minutes = Math.floor(secs / 60)
            let returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
    
            let seconds = Math.floor(secs % 60);
            let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
            return `${returnedMinutes} : ${returnedSeconds}`;
        }
        
        if (paused) {
            currentSong.play();
            this.props.playSong()
            currentSong.addEventListener("timeupdate", function() {
                let timeDisplay = doTime(currentSong.currentTime);
                document.getElementById('time-display').innerHTML = timeDisplay;
            })
        } else {
            currentSong.pause()
            this.props.pauseSong()
            cancelAnimationFrame(progressBar);
            this.setState({isPlaying: false});
        }    
    }

    songEnd() {
        debugger
        let currentSong = document.getElementById('current-song');
        const {queue, fetchSong} = this.props
        let index
        const button = document.getElementById('soundbar-play')
        let queueArray = Object.values(queue)
        queueArray?.forEach((songObj, idx) => {
            debugger
            if (songObj.id === this.props.currentSong.currentSong.id) {
                index = idx
            }
        })
debugger
        if (currentSong) {
            currentSong.onended = function() {
                if (index + 1 <= queueArray?.length) {
                    fetchSong(queueArray[index + 1].id)
                    .then(
                        () => {
                            button.click()
                        }
                    )

                }
            }
        }
        debugger
    }

    nextSong() {
        let currentSong = document.getElementById('current-song');
        currentSong.currentTime = parseInt(currentSong.duration);
    }

    prevSong() {
        let currentSong = document.getElementById('current-song');
        const {queue, fetchSong} = this.props
        let index
        const button = document.getElementById('soundbar-play')
        let queueArray = Object.values(queue)
        queueArray?.forEach((songObj, idx) => {
            if (songObj.id === this.props.currentSong.currentSong.id) {
                index = idx
            }

        })

        if (currentSong) {
            if (index - 1 >= 0) {
                fetchSong(queueArray[index - 1].id)
                .then(
                    () => {
                        button.click()
                    }
                )

            }
        }
    }
    

    render() {
        const {currentSong} = this.props.currentSong
        
        if (!currentSong) return null
        if (this.props.location.pathname === "/us") return null
        if (currentSong) this.updateTime();
        if (currentSong) this.songEnd();
    
        const domCurrentSong = document.getElementById('current-song')
            
        // }
        return (
            <div className='soundbar-container'>
                <div className='soundbar-song'>
                    <div className="soundbar-image">
                        <img className="soundbar-image" src={currentSong.album.photoUrl} alt="album cover photo"></img>
                    </div>
                    <div className='soundbar-song-text'>
                        <div>{currentSong.songTitle}</div>
                        <div>{this.props.artist?.artistName ? this.props.artist?.artistName : "Loading"}</div>
                    </div>
                    <div>
                        <button>        
                            <i className="fa-regular fa-heart fa-2x"></i>
                        </button>
                    </div>
                </div>

                <div className='soundbar-functions'>
                    <div className='soundbar-functions-1'>

                        <button><i className="fa-solid fa-backward-step fa-2x" onClick={() => this.prevSong()}></i></button>
                        <audio src={this.props.currentSong.currentSong.songUrl} id="current-song" preload='metadata'> </audio>
            

                        <button id="soundbar-play" onClick={this.toggleSongPlay}>
                            {
                            domCurrentSong?.paused === true 
                            ? 
                            <i className="fa-solid fa-circle-play fa-3x"></i>
                            :
                            <i className="fa-solid fa-circle-pause fa-3x"></i>
                            } 
                        </button>

                        <button><i className="fa-solid fa-forward-step fa-2x" onClick={() => this.nextSong()}></i></button>

                    </div>


                    <div className='soundbar-functions-2'>
                        <div className="song-time" id="time-display">0:00</div>

                        <input id="progress-bar" type='range' min='0' max={currentSong.duration} defaultValue="0" onChange={this.seekRange}/>   

                        <div className='song-time'>{this.props.currentSong.currentSong.songDuration}</div>
                    </div>


                </div>

                <div className='soundbar-volume'>
                    <input id="volume-bar" type='range' step='0.01' min="0" max="1" onChange={this.seekVolume}/>
                </div>
            </div>
        )
    }
}


export default Soundbar