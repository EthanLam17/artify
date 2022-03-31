import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../../actions/artist";

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ARTISTS: 
      return action.artists;
    case RECEIVE_ARTIST:
      return Object.assign({}, state, {[action.artist.id]: action.artist})
    default: 
      return state;
  }
}

export default ArtistReducer;