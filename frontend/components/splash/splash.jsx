import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

const Splash = ({currentUser}) => {
    const output = currentUser ? (
            <div className="splash-body">
                <h1 className="splash-main">Jump back in</h1>
                <div className="splash-sub">Pick up your music right where you left off.</div>            <Link to="/signup">GET SPOTIFY FREE</Link>
                <Link to="/home">OPEN WEB PLAYER</Link>
            </div>
        ) : (
            <div className="splash-body">
                <h1 className="splash-main">Listening is everything</h1>
                <div className="splash-sub">Millions of songs and podcasts. No credit card needed.</div>
                <Link to="/signup">GET SPOTIFY FREE</Link>
            </div>
        )

    return (
        <div className="splash">
            <NavBarContainer />
            {output}
            <footer className="splash-footer">
                <p>CONTENT</p>
            </footer>
        </div>
    )
}

export default Splash;
