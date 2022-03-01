import {connect} from 'react-redux';
import Login from './login'
import { login } from '../../actions/session';

const mSTP = state => ({
    user: {
        email: '',
        password: ''
    }
})

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(Login);