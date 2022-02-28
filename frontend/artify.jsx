import React from 'react'
import ReactDOM from 'react-dom'
import CreateStore from './store/store'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }

    //TESTING
    const store = CreateStore(preloadedState)
    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<Root store={store}/>, root)

})