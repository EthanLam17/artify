import React from 'react'
import {Link} from 'react-router-dom'

class AlbumIndexItem extends React.Component{
    render() {
        <div className="album-index-item"> //grid-item css selector equivalent
            <div className="album-index-item-image"> 
                <img src={this.props.album.album_photo} alt="Album cover"></img>
                {this.props.album.album_title}
            </div>
        </div>
    }
}

export default AlbumIndexItem
