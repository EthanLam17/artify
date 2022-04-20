import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, NEW_PLAYLIST } from "../../actions/playlist";

const _state = {
  allPlaylists: null,
  currentPlaylist: null,
  created: null
}

const PlaylistReducer = (state = _state, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      nextState.allPlaylists = action.playlists
      return nextState

    case RECEIVE_PLAYLIST: 
      nextState.currentPlaylist = action.playlist
      return nextState

    case NEW_PLAYLIST:
      nextState.created = action.playlist
      return nextState

    default: 
      return state;
  }
}

export default PlaylistReducer;