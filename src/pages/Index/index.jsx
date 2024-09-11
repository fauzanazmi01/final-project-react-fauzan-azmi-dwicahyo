import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Navbar from '../../components/Navbar';
import SearchBar from './SearchBar';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      console.log(process.env.REACT_APP_OMDB_API_KEY);
      const response = await fetch(`https://www.omdbapi.com/?s=disney&apikey=${process.env.REACT_APP_OMDB_API_KEY}`); //TODO handle possible fetch error
      const movies = await response.json();
      this.setState({ movies: movies.Search });
    }
    catch (error) {
      console.error(error);
    }
  }


  render() {
    return (
      <div>
      <Navbar children={<SearchBar/>} />

      <div className='container'>
        <h1 className='my-4'>Watch your favorite movies 🍿</h1>
        <div className='row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3'>
          {this.state.movies.map((movie, i) => (
            <div key={i} className=''>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
          </div>
    );
  }
}

export default Index;