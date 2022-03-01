import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button className="btn" onClick={logout}>Log Out</button>
        </div>
        ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    )

    return (
        <header className="nav-bar">
            <div className="logo-name">
                <i class="fa-brands fa-spotify"></i>
                <h1 className='logo'>Artify</h1>
            </div>
            <div>
                {display}
            </div>
        </header>
    )
}

export default NavBar