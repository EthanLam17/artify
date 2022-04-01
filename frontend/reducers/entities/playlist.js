import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST } from "../../actions/playlist";

const PlaylistReducer = (state ={}, action) => {
  Object.freeze(state);

  switch(action.type) {

    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists

    case RECEIVE_PLAYLIST: 
      return Object.assign({}, state, {playlist: action.playlist})

    default: 
      return state;
  }
}

export default PlaylistReducer;