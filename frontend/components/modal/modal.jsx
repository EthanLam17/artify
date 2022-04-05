import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';
import EditPlaylistContainer from '../playlist/edit_playlist_container';


const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null
  }

  let component;
  switch(modal) {
    case 'EditPlaylist':
      component = <EditPlaylistContainer />
      return (
        <div className='modal-background' onClick={closeModal}>
          <div className='modal-child' onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
    default: 
        return null;
  }  
}



const mSTP = state => ({
  currentPlaylist: state.entities.playlist.currentPlaylist,
  currentUser: state.session.currentUser,
  modal: state.modal,
  
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})



export default withRouter(connect(mSTP, mDTP)(Modal));