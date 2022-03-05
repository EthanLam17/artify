import React from 'react'
import {Link} from 'react-router-dom'


class Soundbar extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSong(1)
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

        const {currentSong} = this.props
        if (!currentSong) return null;



        return (
            <div className='soundbar-container'>
                <div className='soundbar-song'>
                    <div className="soundbar-image">image</div>
                    <div className='soundbar-song-text'>
                        <div>{currentSong.songTitle}</div>
                        <div>artists</div>
                    </div>
                    <div>
                        <button>        
                            <i class="fa-regular fa-heart fa-2x"></i>
                        </button>
                    </div>
                </div>

                <div className='soundbar-functions'>
                    <div className='soundbar-functions-1'>

                        <button><i class="fa-solid fa-backward-step fa-2x"></i></button>

                        <audio id="current-song">
                            <source src={currentSong.songUrl}/>
                        </audio>

                        <i onClick={this.playSong} class="fa-solid fa-circle-play fa-3x"></i>

                        <button><i class="fa-solid fa-forward-step fa-2x"></i></button>

                    </div>
                    <div className='soundbar-functions-2'>current time: slider: time left </div>
                </div>

                <div className='soundbar-volume'>
                    <input type='range' min="0" max="100" />
                </div>
            </div>
        )
    }
}

export default Soundbar