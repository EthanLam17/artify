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
  }

  componentDidMount() {
    let playlistSession = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistSession)
    .then( state => {
      this.setState({
        songs: Object.values(this.props.playlist.currentPlaylist.songs)
      })
    })
  }

  
  componentDidUpdate(prevProps) {
    // if (this.props.playlist.currentPlaylist !== prevProps.playlist.currentPlaylist) {
      if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
        let playlistSession = this.props.match.params.playlistId;
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
    }
  }
  
  
  deleteCurrentPlaylist() {
    this.props.deletePlaylist(this.props.playlist.currentPlaylist.id)
    .then(
      () => this.props.fetchAllPlaylists()
    )
    console.log("fetched all playlists")
    .then(
      () => this.props.history.push('/home')
        )
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
            <i className="fa-solid fa-circle-play fa-3x"></i>

            <div className='delete-dropdown'>
              <button className='delete-dropdown-main'>
                <i className="fa-solid fa-ellipsis fa-2x"></i>
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