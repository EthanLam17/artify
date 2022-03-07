import React from 'react'
import {Link} from 'react-router-dom'

class AlbumIndexItem extends React.Component{

    
    render() {
     
        debugger
        return (
            <div className="album-index-item">
                <div className="album-index-item-image"> 
                    <img className="grid-item-image" src={this.props.album.url} alt="Album cover"></img>
                 </div>
                    {this.props.album.albumTitle}
            </div>
        )
    }
}

export default AlbumIndexItem
