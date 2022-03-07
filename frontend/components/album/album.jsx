import React from 'react'

class Album extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
    }

    render () {

        return (
            <div className='album-show'>
                    <div className='album-header'>
                    
                    </div>

                    <div className='album-body'>
                        
                    </div>
            </div>
        )
    }
}

export default Album