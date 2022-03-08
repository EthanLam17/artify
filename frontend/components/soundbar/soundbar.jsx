import React from 'react'
import {Link} from 'react-router-dom'


class Soundbar extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentSong: this.props.currentSong
        }
    }


    componentDidMount() {
        this.props.fetchSong(this.props.currentSong.id)
        debugger
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.currentSong.currentSong !== prevProps.currentSong.currentSong) {
            document.getElementById('current-song').pause()
            this.setState({
                currentSong: {currentSong: this.props.currentSong}
            })
            document.getElementById('current-song').play()
        } else {
            this.props.currentSong.currentSong
        }
    }

    playSong(e) {
        e.stopPropagation()
        let playing = document.getElementById("current-song").paused

        if (playing) {
            document.getElementById('current-song').play()
        } else {
            document.getElementById('current-song').pause()
        }
    }

    render() {
        debugger
        const {currentSong} = this.props.currentSong
        
        if (!currentSong) return null;
        
        if (this.props.location.pathname === "/us") return null;

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

                        <audio id="current-song">
                            <source src={currentSong.songUrl}/>
                        </audio>

                        <i onClick={this.playSong} className="fa-solid fa-circle-play fa-3x"></i>

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