import { getAllAlbums, getAlbum } from "../utils/album";

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'

const receiveAllAlbums = albums => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
})

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
})

export const fetchAllAlbums = () => dispatch => {
    return getAllAlbums() 
    .then(albums => dispatch(receiveAllAlbums(albums)))
}

export const fetchAlbum = (id) => dispatch => {
    return getAlbum(id) 
    .then(album => dispatch(receiveAlbum(album)))
}