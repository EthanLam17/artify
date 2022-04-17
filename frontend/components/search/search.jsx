import React from 'react';
import AlbumIndex from '../album/album_index';
import AlbumItem from '../album/album_item';
import SongContainer from '../song/song_container';

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
        if (album.albumTitle.toLowerCase().includes(this.state.search.toLowerCase()) 
        ||
        album.artist.artist_name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          updatedAlbums.push(album)
        }
      })
      this.setState({
        albums: updatedAlbums
      })

      let updatedSongs = []
      Object.values(this.props.song).forEach(song => {
        if (
        (song.songTitle.toLowerCase().includes(this.state.search.toLowerCase())
        ||
        song.album.album_title.toLowerCase().includes(this.state.search.toLowerCase())
        ||
        song.artist.artist_name.toLowerCase().includes(this.state.search.toLowerCase())
        ) 
        &&
        !updatedSongs.includes(song)
        ) {
          updatedSongs.push(song)
        }
      })
      this.setState({
        songs: updatedSongs
      })
      this.props.queuePlaylist(this.state.songs)
    }
  }

  handleInput(type) {
    return (e) =>  {
      this.setState({[type]: e.target.value})
    }
  }


  render() {
    if (!this.props.currentUser) return null;
    
    return (
      <div className='search-container'>

        <div className='search-wrap'>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          <input className='search' type="search" placeholder="Artists, songs, or albums" onChange={this.handleInput('search')}></input>
        </div>

        <div className='result-wrap'>
          {
            this.state.search === '' 
            ? 
            <div></div>
            :
            <div className="result-shown">
                <div className='search-sections'>Songs</div>
                <div className='search-song-results'>
                  {
                    this.state.songs.map((song,idx) => (
                      idx < 5 ?
                      <div className='search-song-item'>
                        <SongContainer song={song}/>
                      </div>
                      :
                      null
                    ))
                  }
                </div>

                
                  <div className='search-sections'>Albums</div>
                  <div className='search-album-results'>
                    {
                      this.state.albums.map ((album, idx) => (
                        idx < 5 ?
                        <div className='search-album-item'>
                          <AlbumItem 
                          album={album}
                          artist={this.props.artist}
                          />
                        </div>
                        :
                        null
                        ))
                      }
                  </div>
            </div>
          }
        </div>

      </div>
    )
  }



}

export default Search;