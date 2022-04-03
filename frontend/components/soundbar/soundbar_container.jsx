import React from 'react'
import {connect} from 'react-redux'
import { fetchSong, playSong, pauseSong } from '../../actions/song'
import Soundbar from './soundbar'

const mSTP = state => ({
    currentSong: state.entities.currentSong,
    album: state.entities.album[state.entities.currentSong.albumId],
    isPlaying: state.entities.currentSong.isPlaying,
    artist: state.entities.artist.artist
})

const mDTP = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong())
})

export default connect(mSTP, mDTP)(Soundbar)