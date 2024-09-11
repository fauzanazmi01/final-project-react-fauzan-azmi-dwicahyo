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
    const response = await fetch("https://www.omdbapi.com/?s=disney"); //TODO add API key
    const movies = await response.json();
    this.setState({ movies: movies.Search });
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