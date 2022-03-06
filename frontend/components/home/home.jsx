import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Sidebar from '../sidebar/sidebar_container';
import AlbumIndex from '../album/album_index';
import SoundbarContainer from '../soundbar/soundbar_container'



class Home extends React.Component {    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSong(1)
    }


    render() {
        const {currentSong} = this.props
        
        if (!currentSong) return null;
        
        return (
            <div>
                <NavBarContainer/>
                <div className="home">
                    <Sidebar />
                
                    <AlbumIndex 
                    albums={this.props.albums}
                    />
              

                    <div className='grid-container'>
                        <div className='grid-item grid-item-1'>
                            <div className="grid-item-image">
                                Image
                            </div>
                            {currentSong.songTitle}
                        </div>

                        <div className='grid-item grid-item-2'>
                            <div className="grid-item-image">
                                Image
                            </div>
                            name
                        </div>

                        <div className='grid-item grid-item-3'>
                            <div className="grid-item-image">
                                Image
                            </div>
                            name
                        </div>

                    </div>
         

                </div>
                <SoundbarContainer />
            </div>
        )
    }

}



export default Home