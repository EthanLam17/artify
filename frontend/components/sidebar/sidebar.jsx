import React from 'react'
import {Link} from 'react-router-dom'
import SmallPlaylistItem from '../playlist/small_playlist_item'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: [],
            playlist_name: ``,
        }
        this.handlePlaylistCreate = this.handlePlaylistCreate.bind(this)
    }

    componentDidMount() {
        if (this.props.location.pathname !== "/us") {
            this.props.fetchAllPlaylists()
            .then( state => {
              let currentUserPlaylist = [] 
              Object.values(state.playlists).forEach(playlist => {
                  if (playlist.userId === this.props.currentUser.id) currentUserPlaylist.push(playlist)
              })
              this.setState({
                  playlists: currentUserPlaylist
              })     
            })
        }
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchAllPlaylists()
            .then( state => {
              let currentUserPlaylist = [] 
              Object.values(state.playlists).forEach(playlist => {
                  if (playlist.userId === this.props.currentUser.id) currentUserPlaylist.push(playlist)
              })
              this.setState({
                  playlists: currentUserPlaylist
              })     
            })
        } else if (this.props.playlist.allPlaylists !== prevProps.playlist.allPlaylists) {
            let updatedPlaylist = []
            Object.values(this.props.playlist.allPlaylists).forEach(playlist => {
                if (playlist.userId === this.props.currentUser.id) updatedPlaylist.push(playlist)
            })
            this.setState({
                playlists: updatedPlaylist
            })
        } 
    }

    handlePlaylistCreate(e) {
        this.props.createPlaylist({playlist_name: `My playlist #${this.state.playlists.length + 1}`, user_id: this.props.currentUser.id})
        .then(() => {
            this.props.fetchAllPlaylists()
            .then(() => {
                let {playlists} = this.state
                this.props.history.push(`/playlists/${playlists[playlists.length - 1].id}`)
            })
        })
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
                            <Link to="/playlist" onClick={() => this.handlePlaylistCreate()}>
                                <i id="playlist-icon" className="fa-solid fa-plus sidebar-icons fa-lg"></i>
                                Create Playlist
                            </Link>
                        </div>

                        {/* <div>
                            <Link to="/playlist/0">
                                <i className="fa-solid fa-heart sidebar-icons fa-xl"></i>
                                Liked Songs
                            </Link>
                        </div> */}

                        <hr className='separator'></hr>

                    </div>

                    <div className='playlist-index'>
                        {/* List all user created playlists */}
                        {this.state.playlists?.map((playlist, index) => (
                            <SmallPlaylistItem key={index} playlist={playlist} fetchPlaylist={this.props.fetchPlaylist}/>
                        ))}
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