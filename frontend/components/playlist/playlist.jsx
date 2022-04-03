import React from 'react'
import Song from '../song/song_container'

class Playlist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: [],
    }
  }

  componentDidMount() {
    
    let playlistSession = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistSession)
    .then(
      // this.setState({
      //   songs: this.props.playlist.currentPlaylist.songs ? this.props.playlist.playlist.songs : {}
      // })) 
      )
  }

  componentDidUpdate(prevProps) {
    if (this.props.playlist.currentPlaylist !== prevProps.playlist.currentPlaylist) {
      this.setState({
        songs: Object.values(this.props.playlist.currentPlaylist.songs)
      })
    }
  }


  render() {
    if (!this.props.playlist.currentPlaylist) return null

    return (
      <div className='album-show-container'>
        <div className='album-page'>
          <div className='album-header'>

            <div className='header-info'>
              <div>PLAYLIST</div>
              <div className='page-title'>{this.props.playlist.playlistName}</div>
            </div>

          </div>

          <div className='album-controls'>
            <i className="fa-solid fa-circle-play fa-3x"></i>
          </div>

          <ul className='album-body'>
            {Object.values(this.state.songs).map((song, index) => (
                <li key={index}>
                    <Song song={song}/>
                </li>
            ))}
          </ul>

        </div>

      </div>
    )
  }
}

export default Playlist;