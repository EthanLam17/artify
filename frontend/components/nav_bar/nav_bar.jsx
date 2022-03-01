import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className="exit-buttons" >
            <p>Hello, {currentUser.username}</p>
            <Link className="btn" to="/us" onClick={logout}>Logout</Link>
        </div>
        ) : (
        <div className="entry-buttons">
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    )

    return (
        <header className="nav-bar">
            <div className="logo-name">
                <i class="fa-brands fa-spotify fa-2x"></i>
                <h2 className="logo">Artify</h2>
            </div>
            <div className="links">   
                <a className="btn" href='https://www.linkedin.com/in/ethanlam0123/' target="_blank"><i class="fa-brands fa-linkedin-in fa-2x"></i></a>
                <a className="btn" href='https://github.com/EthanLam17/artify/' target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
        
                {display}
            </div>
        </header>
    )
}

export default NavBar