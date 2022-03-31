import {getArtist, getAllArtists} from '../utils/artist';


export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS"
export const RECEIVE_ARTIST = "RECEIVE_ARTIST"



const  receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
})

const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
})

export const fetchAllArtists = () => dispatch => {
  return getAllArtists()
  .then((artists) => dispatch(receiveAllArtists(artists)))
}

export const fetchArtist = id => dispatch => {
  return getArtist(id)
  .then(artist => dispatch(receiveArtist(artist)))
}