import React from 'react';
import {Link} from 'react-router-dom';


function SmallPlaylistItem(props) {
  return (
    <div className="small-playlist">
      <Link to={`/playlists/${props.playlist.id}`}>
        {props.playlist.playlistName}
      </Link>
    </div>
  )
}

export default SmallPlaylistItem;