import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from "../../actions/album";

const _state = {
    allAlbums: null,
    currentAlbum: null
}

const AlbumReducer = (state = _state, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_ALBUMS:
            nextState.allAlbums = action.albums
            return nextState
            // return action.albums;
        case RECEIVE_ALBUM:
            nextState.currentAlbum = action.album
            return nextState
            // return Object.assign({}, { [action.album.id]: action.album })
        default:
            return state;
    }
}

export default AlbumReducer;