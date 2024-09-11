import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Navbar from '../../components/Navbar';
import SearchBar from './SearchBar';

const Index = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=disney&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const movies = await response.json();
        setMovies(movies.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar child={<SearchBar />} />

      <div className='container'>
        <h1 className='my-4'>Watch your favorite movies 🍿</h1>
        <div className='row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3'>
          {movies.map((movie, i) => (
            <div key={i} className=''>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
