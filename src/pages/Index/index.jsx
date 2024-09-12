import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import Navbar from '../../components/Navbar';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, nextPage } from './movieListSlice';

const Index = () => {
  const movies = useSelector((state) => state.movieList.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies());

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollMax = document.body.offsetHeight;

      if (scrollPosition >= scrollMax-768) {
        dispatch(nextPage())
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <>
      <Navbar child={<SearchBar />} />

      <div className='container'>
        <h1 className='my-4'>Watch your favorite movies 🍿</h1>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3 mb-5'>
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
