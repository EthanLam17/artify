import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../../actions/artist";

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ARTISTS: 
      return action.artists;
    case RECEIVE_ARTIST:
      debugger
      return Object.assign({}, state, {artist: action.artist})
    default: 
      return state;
  }
}

export default ArtistReducer;