import React from 'react'


class SongItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: this.props.isPlaying,
            playlists: []
        }
        this.removeSong = this.removeSong.bind(this)
    }

    addSong(playlist_id, e) {
        // e.stopPropagation()
        const newPlaylistSong = {playlist_id: playlist_id, song_id: this.props.song.id}
        this.props.createPlaylistSong(newPlaylistSong)
        // .then(
        //     () => this.props.history.push(`/playlists/${playlist_id}`)
        // )
    }

    // setCurrentSong(songId) {
    //     let currentSongEle = document.getElementById('current-song')
        
    //     this.props.fetchSong(songId)
   
    //     .then(() => {
    //         // currentSongEle.play()
    //         document.getElementById('current-song').play()
    //     })
    // }

    componentDidMount() {
        this.props.fetchAllPlaylists()
        .then(state => {
            let currentUserPlaylist = []
            Object.values(state.playlists).forEach(playlist => {
                if (playlist.userId === this.props.currentUser.id) currentUserPlaylist.push(playlist)
            })
            this.setState({
                playlists: currentUserPlaylist
            })
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

    removeSong(e) {
        debugger
        const {song, playlist, fetchPlaylist} = this.props
        // const {song, playlist, playlistSong} = this.props
        // Object.values(playlistSong.allPlaylistSongs).forEach(item => {
        //     if (item.songId === song.id && item.playlistId === playlist.currentPlaylist.id) {
        //         this.props.deletePlaylistSong(item.id)
        //     }
        // })

        Object.values(playlist.currentPlaylist.playlistSongs).forEach(playlistSong => {
            if (playlistSong.songId === song.id) {
                this.props.deletePlaylistSong(playlistSong.id)
                .then(
                () => fetchPlaylist(playlist.currentPlaylist.id)
                )
            }
        })
        // fetchPlaylist(playlist.currentPlaylist.id)
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
        if (this.props.location.pathname.includes("playlist")) {
            debugger
            this.props.queuePlaylist(this.props.playlist.currentPlaylist.songs)
        } else if (this.props.location.pathname.includes("album")) {
            let albumObj = {}
            this.props.album.currentAlbum.songs.forEach(song => {
                albumObj[song.id] = song
            })
            this.props.queueAlbum(albumObj)
        }

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

                        
                        <div className="playlist-dropdown-main">
                            <div className='playlist-add'>
                                <div>Add to playlist</div>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>

                            <div className='playlist-dropdown-menu'>
                                <div>
                                    {
                                        this.state.playlists?.map((playlist) => (
                                            <div className='playlist-dropdown-item' onClick={() => this.addSong(playlist.id)}>{playlist.playlistName}</div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                        
                        {
                            this.props.location.pathname.includes("playlist") ?
                            <div className='playlist-dropdown-remove' onClick={() => this.removeSong()}>Remove song</div>
                            :
                            null
                        }

                    </div>


                </div>
            </div>
        )
    }
}

export default SongItem