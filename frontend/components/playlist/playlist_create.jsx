import React from 'react';

class PlaylistCreate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playlist_name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPlaylist(this.state)
      .then(
        () => this.props.history.push('/home')
      )
  }

  render() {
    return (
      <div className='album-show-container'>
      <div className='album-page'>
        <div className='album-header'>

          <div className='header-info'>
            <div>PLAYLIST</div>
            <div className='page-title'></div>
          </div>

        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.playlist_name} onChange={this.handleInput('playlist_name')}/>
          </label>
        </form>

        <ul className='album-body'>
     
        </ul>

      </div>

    </div>
    )
  }




}


export default PlaylistCreate