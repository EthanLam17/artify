import React from 'react'
import {Link} from 'react-router-dom'

class BodyHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropOpen: false
        }
    }


    
    
    render() {
        debugger
        if (this.props.location.pathname === "/us")return null

        return (
            <div className='body-header-container'>
                <div className='body-header-inner'>
                    <div>
                        <i className="fa-solid fa-chevron-left fa-xl direction-btn"></i>

                        <i className="fa-solid fa-chevron-right fa-xl direction-btn"></i>
                    </div>

                    <div className="dropdown">
                        <button className='dropdown-main'>
                            Hello, {this.props.currentUser.username}! 
                            <i class="fa-solid fa-caret-down"></i>
                        </button>

                        <div className='dropdown-menu'>
                            <Link to="/login" onClick={this.props.logout}>Logout</Link>
                        </div>
                            {/* <Link to="/us" onClick={this.props.logout}>Logout</Link> */}
                    </div>
                </div>
            </div>
        )
    }

}

export default BodyHeader