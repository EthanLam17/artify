import React from 'react';
import AlbumIndex from '../album/album_index';
import AlbumItem from '../album/album_item';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      albums: [],
      songs: []
    }
  }

  componentDidMount() {
    this.props.fetchAllSongs();
    this.props.fetchAllAlbums();
    this.props.fetchAllArtists();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      let updatedAlbums = []

      Object.values(this.props.album.allAlbums).forEach(album => {
        if (album.albumTitle.toLowerCase().includes(this.state.search.toLowerCase())) {
          updatedAlbums.push(album)
        }
      })
      this.setState({
        albums: updatedAlbums
      })


    }
  }

  handleInput(type) {
    return (e) =>  {
      this.setState({[type]: e.target.value})
    }
  }


  render() {
    debugger
    if (!this.props.currentUser) return null;
    
    return (
      <div className='search-container'>

        <div className='search-wrap'>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          <input className='search' type="search" placeholder="Artists, songs, or albums" onChange={this.handleInput('search')}></input>
        </div>

        {
          this.state.search === '' 
          ? 
            <div></div>
          :
            <div>
              <div>Songs</div>


              <div>
                <div>Albums</div>
                  {
                    this.state.albums.map (album => (
                      <AlbumItem 
                        album={album}
                        artist={this.props.artist}
                      />
                        // <div>
                        //   {album.albumTitle}
                        // </div>
                      )
                  )
                  }
              </div>
            </div>
        }


      </div>
    )
  }



}

export default Search;