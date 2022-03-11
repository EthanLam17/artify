import React from 'react'


class SongItem extends React.Component{
    constructor(props) {
        super(props)
    
    }

    setCurrentSong(songId) {
        let currentSongEle = document.getElementById('current-song')
        
        this.props.fetchSong(songId)
   
        .then(() => {
            
            currentSongEle.play()
        })
    }

    render() {
        return (
            <div className="album-body-item">
                <div className='album-body-item-left'>

                    <div className='album-body-item-play'>
                        <i onClick={() => this.setCurrentSong(this.props.song.id)} className="fa-solid fa-play"></i>
                    </div>

                    <audio src={this.props.song.songUrl} />
                    <div>{this.props.song.songTitle}</div>
                </div>
                <div>{this.props.song.songDuration}</div>      
            </div>
        )
    }
}

export default SongItem