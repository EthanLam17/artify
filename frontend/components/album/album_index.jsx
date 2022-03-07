import React from 'react'
import AlbumIndexItem from './album_item'


class AlbumIndex extends React.Component{

    render() {
        debugger
        // if (!this.props.albums) {
        //     return null
        // }

        return (

            <div>
                <ul className='grid-container'>
                    {this.props.albums.map((album, index) => (
                        <li className="grid-item" key={index}>
                            <AlbumIndexItem
                                album={album}
                            />
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

export default AlbumIndex