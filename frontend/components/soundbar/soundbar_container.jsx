import React from 'react'
import {connect} from 'react-redux'
import { fetchSong } from '../../actions/song'
import Soundbar from './soundbar'

const mSTP = state => ({
    currentSong: state.currentSong,
})

const mDTP = dispatch => ({
    fetchSong: id => dispatch(fetchSong(id))
})

export default connect(mSTP, mDTP)(Soundbar)