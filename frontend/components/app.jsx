import React from 'react'
import Splash from './splash/splash'
import SignupContainer from './signup/signup_container'
import LoginContainer from './login/login_container'
import HomeContainer from './home/home_container'
import AlbumContainer from './album/album_container'
import SoundbarContainer from './soundbar/soundbar_container'
import Sidebar from './sidebar/sidebar_container'
import BodyHeaderContainer from './body_header/body_header_container'
import {Redirect, Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'
import { Switch } from 'react-router-dom'
import PlaylistContainer from './playlist/playlist_container'
import Modal from './modal/modal'
import PlaylistCreateContainer from './playlist/playlist_create_container'
import SearchContainer from './search/search_container'


const App = () => (
    <div className="display">
        <ProtectedRoute path="/" component={Sidebar} />
        <Modal/>
        <div className='body-parts'>
            <ProtectedRoute path="/" component={BodyHeaderContainer} />
            <Switch>
                <AuthRoute exact path="/signup" component={SignupContainer}/>
                <AuthRoute exact path="/login" component={LoginContainer}/>
                <ProtectedRoute exact path="/home" component={HomeContainer}/>
                <ProtectedRoute exact path="/albums/:albumId" component={AlbumContainer}/>
                <ProtectedRoute exact path="/search" component={SearchContainer}/>
                {/* <ProtectedRoute exact path="/playlist" component={PlaylistCreateContainer}/> */}
                <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistContainer}/>
                <Route exact path="/us" component={Splash}/>
            </Switch>
            <ProtectedRoute path="/" component={SoundbarContainer} />
        </div>
        {/* <Redirect to='/home'/> */}

    </div>
);

export default App