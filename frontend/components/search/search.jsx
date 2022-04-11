import React from 'react';


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


        <input className='search' type="search" placeholder="Artists, songs, or albums" onChange={this.handleInput('search')}>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </input>

        {
          this.state.search === '' 
          ? 
            <div></div>
          :
            <div>
              search results
            </div>
        }


      </div>
    )
  }



}

export default Search;