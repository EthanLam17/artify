import {combineReducers} from 'redux';
import SessionReducer from './session';
import ErrorsReducer from './errors/errors_reducer';
import SongReducer from './song';

export default combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    song: SongReducer
})

