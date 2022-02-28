import React from 'react'
import Splash from './splash/splash'
import SignupContainer from './signup/signup_container'
import HomeContainer from './home/home_container'
import {Redirect, Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'


const App = () => (
    <div>
        {/* <Route exact path="/us" component={SplashContainer}/> */}
        <Route exact path="/" component={Splash}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <ProtectedRoute path="/home" component={HomeContainer}/>
    </div>
);

export default App