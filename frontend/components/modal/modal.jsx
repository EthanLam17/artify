import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';
import EditPlaylist from '../playlist/edit_playlist';


const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null
  }

  let component;
  switch(modal) {
    case 'EditPlaylist':
      component = <EditPlaylist modal={modal} currentUser={currentUser}/>
      return (
        <div className='modal-background' onClick={closeModal}>
          <div className='modal-child-group' onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      )
}  
}



const mSTP = state => ({
  currentPlaylist: state.entities.playlist.currentPlaylist,
  currentUser: state.session.currentUser,
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})



export default withRouter(connect(mSTP, mDTP)(Modal));