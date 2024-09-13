import React, { useEffect } from 'react';
import MovieCard from './MovieCard';
import Navbar from '../../components/Navbar';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, nextPage } from './movieListSlice';
import Loading from '../../components/Loading';

const Index = () => {
  const {movies, endOfPage} = useSelector((state) => state.movieList)
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
        {
          movies.length === 0
          ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Loading />
          </div>
          :
          <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3 mb-5'>
          {movies.map((movie, i) => (
            <div key={i} className='col'>
              <MovieCard movie={movie} />
            </div>
          ))}
          </div>
        }
        {!(endOfPage || movies.length === 0) && <div className="d-flex justify-content-center align-items-center mb-5"><Loading /></div>}
      </div>
    </>
  );
};

export default Index;
