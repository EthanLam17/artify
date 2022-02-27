import React from 'react'
import ReactDom from 'react-dom'
import createStore from './store/store'
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

    const store = createStore(preloadedState)
    ReactDom.render(<Root store={store}/>, root)

})