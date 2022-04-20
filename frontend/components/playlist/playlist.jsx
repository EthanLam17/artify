import React from 'react';
import Song from '../song/song_container';
import {Link} from 'react-router-dom';

class Playlist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: null,
    }
    this.deleteCurrentPlaylist = this.deleteCurrentPlaylist.bind(this)
    this.playPlaylist = this.playPlaylist.bind(this)
    this.toggleSongPlay = this.toggleSongPlay.bind(this)
  }

  componentDidMount() {
    let playlistSession = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistSession)
    .then( state => {
      debugger
      let {playlist} = this.props
      this.setState({
        songs: Object.values(playlist.currentPlaylist.songs)
      })
    })
  }

  
  componentDidUpdate(prevProps) {
      let playlistSession = this.props.match.params.playlistId;
      if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
      this.props.fetchPlaylist(playlistSession)
      .then(() => {
        this.props.playlist.currentPlaylist.songs ? 
        this.setState({
          songs: Object.values(this.props.playlist.currentPlaylist.songs)
        })
        :
        this.setState({
          songs: null
        })
      })
    } else if (this.props.playlist.currentPlaylist !== prevProps.playlist.currentPlaylist) {
        this.props.playlist.currentPlaylist.songs ? 
        this.setState({
          songs: Object.values(this.props.playlist.currentPlaylist.songs)
        })
        :
        this.setState({
          songs: null
        })
    }
  }
  
  
  deleteCurrentPlaylist() {
    this.props.deletePlaylist(this.props.playlist.currentPlaylist.id)
    .then(
      () => this.props.fetchAllPlaylists()
    )
    .then(
      () => this.props.history.push('/home')
        )
  }

  playPlaylist() {
    this.props.queuePlaylist(this.state.songs)
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

  render() {
    if (!this.props.playlist.currentPlaylist) return null

    return (
      <div className='playlist-show-container'>
        <div className='playlist-page'>
          <div className='playlist-header'>

            <i className="fa-solid fa-music fa-4x"></i>


            <div className='header-info'>
              <div>PLAYLIST</div>
              <div className='page-title' onClick={() => this.props.openModal("EditPlaylist")}>{this.props.playlist.currentPlaylist.playlistName}</div>
              <div>{this.props.currentUser.username}</div>
            </div>

          </div>

          <div className='playlist-controls'>
            <i className="fa-solid fa-circle-play playlist-controls-button fa-3x" onClick={() => this.playPlaylist()}></i>

            <div className='delete-dropdown'>
              <button className='delete-dropdown-main'>
                <i className="fa-solid fa-ellipsis playlist-controls-button fa-2x"></i>
              </button>
              
              <div className='delete-dropdown-menu'>
                  <Link to="/home" onClick={() => this.deleteCurrentPlaylist()}>Delete</Link>
              </div>
            </div>
            
          </div>

          <ul className='playlist-body'>
            {
            this.state.songs ? 
            Object.values(this.state.songs)?.map((song, index) => (
                <li key={index}>
                    <Song song={song}/>
                </li>
            )) :
            <div>Add songs to your playlist</div>
            }
          </ul>

        </div>

      </div>
    )
  }
}

export default Playlist;