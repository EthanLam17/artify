import { RECEIVE_SONG, CHANGE_CURRENT_SONG } from "../actions/song";



const CurrentSongReducer = (state={currentSong : null}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG: 
            return {currentSong: action.song}
        case CHANGE_CURRENT_SONG:
            return {currentSong: action.song}
        default:
            return state
    }
}

export default CurrentSongReducer