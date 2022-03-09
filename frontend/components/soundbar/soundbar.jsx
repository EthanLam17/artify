import React from 'react'


class Soundbar extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying
        }
        this.toggleSongPlay = this.toggleSongPlay.bind(this)
    }

    componentDidMount() {
        this.props.fetchSong(this.props.currentSong.id)
        // document.getElementById('current-song').pause
        // this.props.fetchSong(2)
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.currentSong.currentSong !== prevProps.currentSong.currentSong) {
            // document.getElementById('current-song').play()
        

            // document.getElementById('current-song').play()  
            
            // this.setState({
            //     isPlaying: true
            // })          
            // this.props.fetchSong(this.props.currentSong.currentSong.id)
        }
    }

    toggleSongPlay(e) {
        e.stopPropagation()
        let paused = document.getElementById("current-song").paused

        if (paused) {
            document.getElementById('current-song').play()
            this.setState({isPlaying: true})
        } else {
            document.getElementById('current-song').pause()
            this.setState({isPlaying: false})
        }
        // if (this.props.isPlaying === false) {
        //     this.setState({isPlaying: true})
        //     document.getElementById('current-song').play()
        // } else {
        //     this.setState({isPlaying: false})
        //     document.getElementById('current-song').pause()
        // }
    }


    // togglePlayPause() {
    //     this.setState({isPlaying: !this.props.isPlaying})
    // }

    render() {
        const {currentSong} = this.props.currentSong
        
        if (!currentSong) return null
        if (this.props.location.pathname === "/us") return null

        return (
            <div className='soundbar-container'>
                <div className='soundbar-song'>
                    <div className="soundbar-image">
                        <img src={currentSong.photoUrl} alt="album cover photo"></img>
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
                        {/* <audio id="current-song">
                            <source src={this.props.currentSong.currentSong.songUrl}/>
                        </audio> */}

                        <button onClick={this.toggleSongPlay}>
                        {/* <button onClick={this.togglePlayPause}> */}
                            {this.props.isPlaying ? ( <i className="fa-solid fa-circle-pause"></i> ) : ( <i className="fa-solid fa-circle-play fa-3x"></i> ) } 
                        </button>
                        {/* <i onClick={this.toggleSongPlay} className="fa-solid fa-circle-play fa-3x"></i> */}

                        <button><i className="fa-solid fa-forward-step fa-2x"></i></button>

                    </div>
                    <div className='soundbar-functions-2'>
                        <input type='range' min='0' max='100'/>    
                    </div>
                </div>

                <div className='soundbar-volume'>
                    <input type='range' min="0" max="100" />
                </div>
            </div>
        )
    }

}


export default Soundbar