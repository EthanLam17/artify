import React from 'react'
import Song from '../song/song_container'

class Playlist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: null,
    }
  }

  componentDidMount() {
    debugger
    let playlistSession = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistSession)
    .then( state => {
      debugger
      this.setState({
        songs: Object.values(this.props.playlist.currentPlaylist.songs)
      })
    })
    // .then(
    //   this.props.playlist.currentPlaylist.songs ?
    //   this.setState({
    //     songs: Object.values(this.props.playlist.currentPlaylist.songs)
    //   })
    //   :
    //   this.setState({
    //     songs: null
    //   })
    // )
  }

  componentDidUpdate(prevProps) {
debugger
    // if (this.props.playlist.currentPlaylist !== prevProps.playlist.currentPlaylist) {
    if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
      let playlistSession = this.props.match.params.playlistId;
      this.props.fetchPlaylist(playlistSession)
      .then(state => {
        this.props.playlist.currentPlaylist.songs ? 
          this.setState({
          songs: Object.values(this.props.playlist.currentPlaylist.songs)
        })
        :
        this.setState({
          songs: null
        })
      })
      // this.props.playlist.currentPlaylist.songs ? 
      //     this.setState({
      //     songs: Object.values(this.props.playlist.currentPlaylist.songs)
      //   })
      //   :
      //   this.setState({
      //     songs: null
      //   })
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
              <div className='page-title' onClick={() => this.props.openModal("EditPlaylist")}>{this.props.playlist.currentPlaylist.playlistName}</div>
            </div>

          </div>

          <div className='album-controls'>
            <i className="fa-solid fa-circle-play fa-3x"></i>
          </div>

          <ul className='album-body'>
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