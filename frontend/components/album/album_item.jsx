import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AlbumIndexItem extends React.Component{

    
    render() {
        
        return (
            <div className="album-index-item">
                <Link to={`/albums/${this.props.album.id}`}>
                <div className="album-index-item-image"> 
                    <img className="grid-item-image" src={this.props.album.url} alt="Album cover"></img>
                 </div>
                
                <div className='album-item-title'>
                    {this.props.album.albumTitle}
                </div>

                <div className='album-item-artist'>
                    {this.props.artist.allArtists[this.props.album.artistId].artistName}
                </div>

                </Link>
            </div>
        )
    }
}

const mSTP = state => ({
    playlist: state.entities.playlist
})


export default connect(mSTP, null)(AlbumIndexItem)