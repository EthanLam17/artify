import React from 'react'
import AlbumIndexItem from './album_item'


class AlbumIndex extends React.Component{

    render() {
        
        if (!this.props.albums) {
            return null
        }

        return (
            <div>
                {this.props.albums.map((album) => (
                    <AlbumIndexItem 
                    album = {album}
                    />   
                ))}
            </div>
            )
    }
}

export default AlbumIndex