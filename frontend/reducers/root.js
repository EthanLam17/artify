import {combineReducers} from 'redux';
import SessionReducer from './session';
import ErrorsReducer from './errors/errors_reducer';

export default combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer
})

