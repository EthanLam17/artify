import { RECEIVE_SONG } from "../../actions/song";

const _state = {
    currentSong: null,
    isPlaying: false
}

const CurrentSongReducer = (state = _state, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG: 
            return {currentSong: action.song, isPlaying: false}
        default:
            return state
    }
}

export default CurrentSongReducer