import React from 'react';

class EditPlaylist extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.playlist.currentPlaylist.id,
      playlist_name: '',
      // playlist_name: this.props.playlist.currentPlaylist.playlistName,
      user_id: this.props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePlaylist(this.state)
    // .then(() => this.props.fetchAllPlaylists())
    // this.props.fetchAllPlaylists();
    .then(() => this.props.closeModal())
    // .then(() => (this.props.history.push(`/playlists/${this.state.id}`)))
  }

  componentDidUpdate(prevProps) {
    if (this.props.playlist.currentPlaylist !== prevProps.playlist.currentPlaylist) {
      this.props.fetchAllPlaylists()
    }
  }

  render() {
    

    return (
      <div className='edit-playlist-modal'>
        <h2>Edit details</h2>

        <form onSubmit={this.handleSubmit}>
          <div className='playlist-modal-body'>
            <i className="fa-solid fa-music fa-4x"></i>
            <div className='edit-playlist-container'>
              <label className='edit-playlist'>Name
                <input type="text" placeholder={this.props.playlist.currentPlaylist.playlistName} onChange={this.handleInput('playlist_name')} />
              </label>
            </div>
          </div>
          <input type="submit" value="Save"/>
        </form>

      </div>
    )
  }
}

export default EditPlaylist 