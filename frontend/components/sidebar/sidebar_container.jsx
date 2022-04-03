import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { fetchAllPlaylists, fetchPlaylist } from '../../actions/playlist';

const mSTP = state => ({
    currentUser: state.session.currentUser,
    playlists: state.entities.playlists
})

const mDTP = dispatch => {
    return {       
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        fetchPlaylist: playlist_id => dispatch(fetchPlaylist(playlist_id)) 
    }
}


export default connect(mSTP, mDTP)(Sidebar);