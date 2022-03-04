import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from "../actions/song";

const _nullSong = {
    currentSong: null
}

const SongReducer = (state=_nullSong, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_SONG:
            // return {currentSong: action.song.id}
            return Object.assign({}, {currentSong: action.song});
        default: 
            return state;
    }
}

export default SongReducer;