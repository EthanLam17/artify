import { RECEIVE_CURRENT_USER, RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from "../../actions/session";

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER_ERRORS: 
            const newState = Object.assign({}, action.errors);
            return newState;
        // case RECEIVE_CURRENT_USER:
        //     return [];
        case CLEAR_USER_ERRORS:
            return [];
        default:
            return oldState
    }
}

export default sessionErrorsReducer