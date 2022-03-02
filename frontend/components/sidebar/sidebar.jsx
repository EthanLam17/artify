import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderSidebar() {
            return (
                <div className="sidebar-container">
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/search">Search</Link>
                    </div>
                    <div>
                        <Link to="/library">Your Library</Link>
                    </div>
        
                    <div>
                        <Link to="/playlist">Create Playlist</Link>
                    </div>
                    <div>
                        <Link to="/playlist/0">Liked Songs</Link>
                    </div>
                    <div className='playlist-index'>
                        {/* List all user created playlists */}
                    </div>
                </div>
            )
        }

    render() {
        return (
            <div>
                {this.renderSidebar()}
            </div>
        )
    }
}



export default Sidebar