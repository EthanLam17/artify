import { PLAY_SONG, PAUSE_SONG, RECEIVE_SONG } from "../../actions/song";

const _state = {
    currentSong: null,
    isPlaying: false
}

const CurrentSongReducer = (state = _state, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SONG: 
            nextState.currentSong = action.song
            return nextState
        case PLAY_SONG:
            nextState.isPlaying = true
            return nextState
        case PAUSE_SONG:
            nextState.isPlaying = false
            return nextState
        default:
            return state
    }
}

export default CurrentSongReducer