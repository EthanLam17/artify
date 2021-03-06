import {combineReducers} from 'redux';

import SessionReducer from './session';
import ErrorsReducer from './errors/errors_reducer';
import entities_reducer from './entities_reducer';
import ModalReducer from './modal_reducer';

export default combineReducers({
    session: SessionReducer,
    errors: ErrorsReducer,
    entities: entities_reducer,
    modal: ModalReducer
})

