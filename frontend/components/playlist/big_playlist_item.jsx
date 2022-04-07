import React from 'react';
import {Link} from 'react-router-dom'

function BigPlaylistItem(props) {
  return (
    <Link to={`/playlists/${props.playlist.id}`}>
      <div className='home-recent-grid-item'>
        <i className="fa-solid fa-music fa-2x"></i>
        {props.playlist.playlistName}
      </div>
    </Link>
  )
}

export default BigPlaylistItem;