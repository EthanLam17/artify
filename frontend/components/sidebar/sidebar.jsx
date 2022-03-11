import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSidebar() {
            return (
                <div className="sidebar-container">
                    <div className='sidebar-menu'>

                        <div className="sidebar-logo-name">
                            {/* <Link to="/home"> */}
                                <i className="fa-brands fa-spotify sidebar-icons fa-3x"></i>
                                <h2 className="logo">Artify</h2>
                            {/* </Link> */}
                        </div>

                        <div>
                            <Link to="/home">
                                <i className="fa-solid fa-house sidebar-icons fa-xl"></i>
                                Home
                            </Link>
                        </div>

                        <div className='split-menu'>
                            <Link to="/search">
                                <i className="fa-solid fa-magnifying-glass sidebar-icons fa-xl"></i>
                                Search
                            </Link>
                        </div>

                        {/* <div>
                            <Link to="/library">
                                <i className="fa-solid fa-book-open sidebar-icons fa-xl"></i>Your Library
                            </Link>
                        </div> */}
            
                        <div>
                            <Link to="/playlist">
                                <i id="playlist-icon" className="fa-solid fa-plus sidebar-icons fa-lg"></i>
                                Create Playlist
                            </Link>
                        </div>

                        <div>
                            <Link to="/playlist/0">
                                <i className="fa-solid fa-heart sidebar-icons fa-xl"></i>
                                Liked Songs
                            </Link>
                            
                        </div>
                    </div>

                    <div className='playlist-index'>
                        {/* List all user created playlists */}
                    </div>
                </div>
            )
        }

    render() {
        if (this.props.location.pathname === "/us") return null

        return (
            <div>
                {this.renderSidebar()}
            </div>
        )
    }
}



export default Sidebar