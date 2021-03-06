import {RECEIVE_PLAYLIST_SONGS} from '../../actions/playlist_song';

const _state = {
  allPlaylistSongs: null
}

const PlaylistSongReducer = (state=_state, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_PLAYLIST_SONGS:
      nextState.allPlaylistSongs = action.playlistSongs
      return nextState

    default: 
      return state;
  }
}

export default PlaylistSongReducer;