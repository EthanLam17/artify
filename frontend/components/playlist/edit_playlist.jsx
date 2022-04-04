import React from 'react'

class EditPlaylist extends React.Component {




  render() {
    

    return (
      <div className='edit-playlist-modal'>
        <h2>Edit details</h2>
        <label>Name
          <input type="text"></input>
        </label>
      </div>
    )
  }
}

export default EditPlaylist