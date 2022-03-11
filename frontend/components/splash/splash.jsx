import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

const Splash = ({currentUser}) => {
    const output = currentUser ? (
            <div className="splash-body">
                <div>
                    <h1 className="splash-main">Jump back in</h1>
                    <div className='sub-content'>
                        <div className="splash-sub">Pick up your music right where you left off.</div>
                        <Link to="/home">OPEN WEB PLAYER</Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className="splash-body">
                <div>
                    <h1 className="splash-main">Listening is everything</h1>
                    <div className="sub-content">
                        <div className="splash-sub">Millions of songs and podcasts. No credit card needed.</div>
                        <button><Link to="/signup">GET SPOTIFY FREE</Link></button>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="splash">
            <NavBarContainer />
            {output}
            <footer className="splash-footer">
                <div className='splash-footer-content'>
                    <div className='footer-column'>
                        <div className="footer-logo">
                            <i className="fa-brands fa-spotify fa-3x"></i>
                            <h2 className="logo">Artify</h2>
                        </div>
                    </div>
                    <div className='footer-column'>
                        <ul><label>Skills</label>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Ruby on Rails</li>
                            <li>Ruby</li>
                            <li>HTML-5</li>
                            <li>CSS/SCSS</li>
                        </ul>
                    </div>
                    
                    <div className='footer-column'>
                        <ul><label>Projects</label>
                            <li><a href="https://github.com/EthanLam17/cracked_out_project" target="_blank">Cracked Out</a></li>
                        </ul>
                    </div>

                    <div className='footer-column'>
                        <ul><label>Contact Me</label>
                            <li>ethanlam0@yahoo.com</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Splash;
