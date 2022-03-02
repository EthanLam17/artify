import React from 'react'
import {connect} from 'react-redux'
import Sidebar from './sidebar'

const mSTP = state => ({
    currentUser: state.session.currentUser
})



export default connect(mSTP, null)(Sidebar);