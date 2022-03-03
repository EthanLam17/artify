import React from 'react'
import {connect} from 'react-redux'
import Soundbar from './soundbar'

const mSTP = state => ({
    currentSong: state.session.currentSong
})

export default connect(mSTP, null)(Soundbar)