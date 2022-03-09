import React from 'react'
import Splash from './splash/splash'
import SignupContainer from './signup/signup_container'
import LoginContainer from './login/login_container'
import HomeContainer from './home/home_container'
import AlbumContainer from './album/album_container'
import SoundbarContainer from './soundbar/soundbar_container'
import Sidebar from './sidebar/sidebar'
import BodyHeaderContainer from './body_header/body_header_container'
import {Redirect, Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'
import { Switch } from 'react-router-dom'



const App = () => (
    <div className="display">
        <ProtectedRoute path="/" component={Sidebar} />
        <div className='body-parts'>
            <ProtectedRoute path="/" component={BodyHeaderContainer} />
            {/* <Route exact path="/us" component={SplashContainer}/> */}
            <div className='body-main'>
                <Switch>
                    <AuthRoute path="/signup" component={SignupContainer}/>
                    <AuthRoute path="/login" component={LoginContainer}/>
                    <ProtectedRoute path="/home" component={HomeContainer}/>
                    <ProtectedRoute path="/albums/:albumId" component={AlbumContainer}/>
                    <Route exact path="/us" component={Splash}/>
                    <Redirect to='/us'/>
                </Switch>
            </div>
            <ProtectedRoute path="/" component={SoundbarContainer} />
        </div>

    </div>
);

export default App