import React from 'react'


class SongItem extends React.Component{
    constructor(props) {
        super(props)
    
    }

    setCurrentSong(songId) {
        let currentSongEle = document.getElementById('current-song')
        
        this.props.fetchSong(songId)
   
        .then(() => {
            debugger
            currentSongEle.play()
        })
    }

    render() {
        return (
            <div className="album-body-item">
                <i onClick={() => this.setCurrentSong(this.props.song.id)} className="fa-solid fa-play"></i>
                <audio src={this.props.song.songUrl} />
                <div>{this.props.song.songTitle}</div>
                <div>{this.props.song.songDuration}</div>      
            </div>
        )
    }
}

export default SongItem