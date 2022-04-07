import React from 'react'
import {Link} from 'react-router-dom'

class AlbumIndexItem extends React.Component{

    
    render() {
     
        
        return (
            <div className="album-index-item">
                <Link to={`/albums/${this.props.album.id}`}>
                <div className="album-index-item-image"> 
                    <img className="grid-item-image" src={this.props.album.url} alt="Album cover"></img>
                 </div>
                    {this.props.album.albumTitle}
                    
                </Link>
            </div>
        )
    }
}

export default AlbumIndexItem
