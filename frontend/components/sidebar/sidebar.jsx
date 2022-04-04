import React from 'react'
import {Link} from 'react-router-dom'
import SmallPlaylistItem from '../playlist/small_playlist_item'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: [],
            playlist_name: ``
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
        // if (this.props.location.pathname !== "/us") {
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
        }
    }

    handlePlaylistCreate(e) {
        // e.preventDefault();
        // e.stopPropagation();
        const playlistKeys = Object.values(this.props.playlist.allPlaylists)
        this.props.createPlaylist({playlist_name: `My playlist #${this.state.playlists.length + 1}`, user_id: this.props.currentUser.id})
          .then(
            // () => this.props.history.push(`/playlists/${newPlaylist.id}`)
            () => this.props.history.push(`/playlists/${playlistKeys[playlistKeys.length - 1].id}`)
          )
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

                        <div>
                            <Link to="/playlist/0">
                                <i className="fa-solid fa-heart sidebar-icons fa-xl"></i>
                                Liked Songs
                            </Link>
                            
                        </div>
                    </div>

                    <div className='playlist-index'>
                        {/* List all user created playlists */}
                        {this.state.playlists?.map((playlist, index) => (
                            <SmallPlaylistItem playlist={playlist}/>
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