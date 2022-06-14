import React from 'react'
import AlbumItem from './album_item'


class AlbumIndex extends React.Component{

    render() {

        return (

            <div className='album-index-container'>
                <div className='home-row-title'>
                    Discover albums
                </div>
                <ul className='grid-container'>
                    {this.props.albums.map((album, index) => (
                        index < 12 ?
                        <li className="grid-item" key={index}>
                            <AlbumItem
                                album={album}
                                artist={this.props.artist}
                                key={index}
                            />
                        </li>
                        :
                        null
                    ))}
                </ul>
            </div>

        )
    }
}

export default AlbumIndex