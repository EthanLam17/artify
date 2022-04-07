import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from "../../actions/artist";

const _state = {
  allArtists: null,
  artist: null
}

const ArtistReducer = (state = _state, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_ARTISTS: 
      nextState.allArtists = action.artists
      return nextState
    case RECEIVE_ARTIST:
      nextState.artist = action.artist
      return nextState
    default: 
      return state;
  }
}

export default ArtistReducer;