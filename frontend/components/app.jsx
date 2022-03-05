import React from 'react'
import Splash from './splash/splash'
import SignupContainer from './signup/signup_container'
import LoginContainer from './login/login_container'
import HomeContainer from './home/home_container'
import AlbumContainer from './album/album_container'
import {Redirect, Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'


const App = () => (
    <div>
        {/* <Route exact path="/us" component={SplashContainer}/> */}
        <Route exact path="/us" component={Splash}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
        <ProtectedRoute path="/home" component={HomeContainer}/>
        <ProtectedRoute path="/album" component={AlbumContainer}/>
        <Redirect to='/us'/>
    </div>
);

export default App