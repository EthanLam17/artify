import React from 'react'
import SignupContainer from './signup/signup_container'
import HomeContainer from './home/home_container'
import {Redirect, Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'


const App = () => (
    <div>
        {/* <Route exact path="/us" component={SplashContainer}/> */}
        <AuthRoute path="/signup" component={SignupContainer}/>
        <ProtectedRoute path="/home" component={HomeContainer}/>
        {/* <Redirect to='/us'/> */}
    </div>
);

export default App