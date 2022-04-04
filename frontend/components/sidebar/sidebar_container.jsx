import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { fetchAllPlaylists, fetchPlaylist, createPlaylist } from '../../actions/playlist';

const mSTP = state => ({
    currentUser: state.session.currentUser,
    playlist: state.entities.playlist
})

const mDTP = dispatch => {
    return {       
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        fetchPlaylist: playlist_id => dispatch(fetchPlaylist(playlist_id)),
        createPlaylist: playlist => dispatch(createPlaylist(playlist))
    }
}


export default connect(mSTP, mDTP)(Sidebar);