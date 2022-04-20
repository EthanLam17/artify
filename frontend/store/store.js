import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger';

import rootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

const CreateStore = (preloadedState = {}) => createStore(
    rootReducer, preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default CreateStore;