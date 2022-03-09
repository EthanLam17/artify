import React from 'react'
import {Link} from 'react-router-dom'

class BodyHeader extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        if (this.props.location.pathname === "/us")return null

        return (
            <div className='body-header-container'>
                <div>
                    <i className="fa-solid fa-chevron-left"></i>

                    <i className="fa-solid fa-chevron-right"></i>
                </div>

                <div>
                    Hello, {this.props.currentUser.username}!
                </div>

            </div>
        )
    }

}

export default BodyHeader