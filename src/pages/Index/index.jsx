import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Navbar from '../../components/Navbar';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieList } from './movieListSlice';

const Index = () => {
  const movies = useSelector((state) => state.movieList.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=disney&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const movies = await response.json();
        dispatch(setMovieList(movies.Search));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar child={<SearchBar />} />

      <div className='container'>
        <h1 className='my-4'>Watch your favorite movies 🍿</h1>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3'>
          {movies.map((movie, i) => (
            <div key={i} className=''>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
