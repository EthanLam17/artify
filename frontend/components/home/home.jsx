import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar_container';

const Home = () => (
    <div>
        <NavBarContainer/>
        <div className="home">
            <Sidebar />
          
            <div className='grid-container'>
                <div className='grid-item grid-item-1'>
                    <div className="grid-item-image">
                        Image
                    </div>
                    grid
                </div>

                <div className='grid-item grid-item-2'>
                    <div className="grid-item-image">
                        Image
                    </div>
                    grid
                </div>

                <div className='grid-item grid-item-3'>
                    <div className="grid-item-image">
                        Image
                    </div>
                    grid
                </div>
                
                <div className='grid-item grid-item-4'>grid</div>
                <div className='grid-item grid-item-5'>grid</div>
                <div className='grid-item grid-item-6'>grid</div>
                <div className='grid-item grid-item-7'>grid</div>
                <div className='grid-item grid-item-8'>grid</div>
                <div className='grid-item grid-item-9'>grid</div>
                <div className='grid-item grid-item-10'>grid</div>

            </div>
        </div>
    </div>
)

export default Home