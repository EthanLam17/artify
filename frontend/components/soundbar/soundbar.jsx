import React from 'react'


class Soundbar extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying,
            songTime: "0:00"
        }
        this.toggleSongPlay = this.toggleSongPlay.bind(this)
        // this.calcTime = this.calcTime.bind(this)
    }

    componentDidMount() {
        this.props.fetchSong(this.props.currentSong.id)

    }

    componentDidUpdate(prevProps) {
        
        if (this.props.currentSong.currentSong !== prevProps.currentSong.currentSong) {
            this.setState({songTime : this.currentTime})
        }
    }
    
    
    factorTime(time) {
        let seconds = Math.floor(time)
        // return Math.floor(time)
        return `${Math.floor(seconds / 60)} : ${seconds % 60}`
    }

    
    
    toggleSongPlay(e) {
        e.stopPropagation()
        let currentSong = document.getElementById('current-song')
        let paused = currentSong.paused
        
        const calcTime = (secs) => {
            let minutes = Math.floor(secs / 60)
            let returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    
            let seconds = Math.floor(secs % 60);
            let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    
            return `${returnedMinutes} : ${returnedSeconds}`;
        }
        
        
        if (paused) {
            currentSong.play()
            this.setState({isPlaying: true})
            currentSong.addEventListener("timeupdate", function() {

                let timeDisplay = calcTime(currentSong.currentTime)
                document.getElementById('time-display').innerHTML = timeDisplay
            })
        } else {
            currentSong.pause()
            this.setState({isPlaying: false})
        }    
    }
    


    render() {
        const {currentSong} = this.props.currentSong
        
        if (!currentSong) return null
        if (this.props.location.pathname === "/us") return null
        
        // let selectCurrentSong = document.getElementById('current-song')

        // selectCurrentSong.addEventListener('timeupdate', (e) => {

        // })



        // isPlaying && exists => audio element.timeupdate = () => {
        // this.props.set time (how )
        // }

        return (
            <div className='soundbar-container'>
                <div className='soundbar-song'>
                    <div className="soundbar-image">
                        <img className="soundbar-image" src={currentSong.album.photoUrl} alt="album cover photo"></img>
                    </div>
                    <div className='soundbar-song-text'>
                        <div>{currentSong.songTitle}</div>
                        <div>artists</div>
                    </div>
                    <div>
                        <button>        
                            <i className="fa-regular fa-heart fa-2x"></i>
                        </button>
                    </div>
                </div>

                <div className='soundbar-functions'>
                    <div className='soundbar-functions-1'>

                        <button><i className="fa-solid fa-backward-step fa-2x"></i></button>
                        <audio src={this.props.currentSong.currentSong.songUrl} id="current-song"> </audio>
            

                        <button onClick={this.toggleSongPlay}>
                        {/* <button onClick={this.togglePlayPause}> */}
                            {this.props.isPlaying ? ( <i className="fa-solid fa-circle-pause"></i> ) : ( <i className="fa-solid fa-circle-play fa-3x"></i> ) } 
                        </button>
                        {/* <i onClick={this.toggleSongPlay} className="fa-solid fa-circle-play fa-3x"></i> */}

                        <button><i className="fa-solid fa-forward-step fa-2x"></i></button>

                    </div>
                    <div className='soundbar-functions-2'>

                        {/* CURRENT TIME */}
                        <div id="time-display">00:00</div>
                        <input type='range' min='0' max="100" defaultValue="0"/>    
                        <div>{this.props.currentSong.currentSong.songDuration}</div>
                    </div>
                </div>

                <div className='soundbar-volume'>
                    <input type='range' step='0.01' min="0" max="100" />
                </div>
            </div>
        )
    }

}


export default Soundbar