import { getSong, getAllSongs } from "../utils/song";

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const CHANGE_CURRENT_SONG = 'CHANGE_CURRENT_SONG'

const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

const receiveSong = song => {
    return ({
        type: RECEIVE_SONG,
        song
    })
}

const changeCurrentSong = song => ({
    type: CHANGE_CURRENT_SONG,
    song
})


export const fetchAllSongs = () => dispatch => {
    return getAllSongs()
    .then((songs) => dispatch(receiveAllSongs(songs)))
}


export const fetchSong = (id) => dispatch => (
    getSong(id)
    .then((song) => dispatch(receiveSong(song)))
)
