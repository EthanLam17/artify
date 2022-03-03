import React from 'react'
import {Link} from 'react-router-dom'


class Soundbar extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (

            <div className='soundbar-container'>
                <div className='soundbar-song'>
                    <div>image</div>
                    <div>
                        <div>title</div>
                        <div>arists</div>
                    </div>
                    <div>like symbol (add to playlist)</div>
                </div>

                <div className='soundbar-functions'>
                    <div className='soundbar-functions-1'>
                        <div>back button</div>
                        <div>play/pause</div>
                        <div>next song</div>
                    </div>
                    <div className='soundbar-functions-2'>current time: slider: time left </div>
                </div>

                <div>
                    adjust volume
                </div>
            </div>
        )
    }
}

export default Soundbar