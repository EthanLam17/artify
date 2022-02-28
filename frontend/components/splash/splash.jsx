import React from 'react'
import {Link} from 'react-router-dom'


export default () => (
    <div className="splash">
        <div className="logo-image-frame">
            <img className="logo-image" src="" />
            <h1>Listening is everything</h1>
            <div>Millions of songs and podcasts. No credit card needed.</div>
            <Link to="/signup">GET SPOTIFY FREE</Link>
        </div>
    </div>
)


}