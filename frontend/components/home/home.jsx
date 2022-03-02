import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar_container';

const Home = () => (
    <div>
        <NavBarContainer/>
        <div className="home">
            <Sidebar />
          
            <div className='grid-container'>
                <div className='grid-item grid-item-1'>grid</div>
                <div className='grid-item grid-item-2'>grid</div>
                <div className='grid-item grid-item-3'>grid</div>
                <div className='grid-item grid-item-4'>grid</div>
                <div className='grid-item grid-item-5'>grid</div>

            </div>
        </div>
    </div>
)

export default Home