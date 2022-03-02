import {connect} from 'react-redux'
import { clearUserErrors, createNewUser } from '../../actions/session'
import Signup from './signup';

const mSTP = state => ({
    demo: {
        id: 1,
        email: "demo",
        username: "demo",
        password: "password"
    },
    errors: state.errors
})

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearUserErrors: () => dispatch(clearUserErrors())
})


export default connect(null, mDTP)(Signup);

