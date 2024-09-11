import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Star from './Star';
import Poster from './Poster';
import RatingBox from './RatingBox';
import MetascoreBox from './MetascoreBox';
import Trophy from './Trophy';

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
   const fetchMovie = async () => {
      try {
        // const movie = {
        //   "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        //   "Awards": "Nominated for 7 Oscars. 21 wins & 42 nominations total",
        //   "BoxOffice": "$28,767,189",
        //   "Country": "United States",
        //   "DVD": "N/A",
        //   "Director": "Frank Darabont",
        //   "Genre": "Drama",
        //   "Language": "English",
        //   "Metascore": "82",
        //   "Plot": "A Maine banker convicted of the murder of his wife and her lover in 1947 gradually forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple comp...",
        //   "Poster": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        //   "Production": "N/A",
        //   "Rated": "R",
        //   "Ratings": [
        //     { "Source": "Internet Movie Database", "Value": "9.3/10" },
        //     { "Source": "Rotten Tomatoes", "Value": "91%" },
        //     { "Source": "Metacritic", "Value": "82/100" }
        //   ],
        //   "Released": "14 Oct 1994",
        //   "Response": "True",
        //   "Runtime": "142 min",
        //   "Title": "The Shawshank Redemption",
        //   "Type": "movie",
        //   "Website": "N/A",
        //   "Writer": "Stephen King, Frank Darabont",
        //   "Year": "1994",
        //   "imdbID": "tt0111161",
        //   "imdbRating": "9.3",
        //   "imdbVotes": "2,932,194"
        // };
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const movie = await response.json();
        setMovie(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <div className='row gx-4 mb-2'>
          <div className='col-12 col-lg-4 col-xxl-3 mb-3 mb-lg-0 d-flex justify-content-center'>
            <Poster link={movie.Poster}/>
          </div>
          <div className='col'>
            <h1 className='mb-1'>{movie.Title || 'N/A'} <span className='fs-6 fw-light'>{movie.Type}</span></h1>
            <div className='mb-3'>
              {movie.Year} | {movie.Rated} | {movie.Runtime}
            </div>
            <div className='container mb-3'>
              <div className='row gap-2 justify-content-center'>
                <RatingBox rating={movie.imdbRating} votes={movie.imdbVotes}/>
                {
                  (movie.Metascore !== 'N/A') && (
                    <MetascoreBox rating={movie.Metascore} />
                  )
                }
              </div>
            </div>
            {movie.Awards != "N/A" && (<div className='alert'>
              <Trophy /><strong>{movie.Awards}</strong>
            </div>)}
            <div className='mb-2'>
              <h2>Plot</h2>
              <p className='m-0'>{movie.Plot || 'N/A'}</p>
            </div>
            <div className='mb-2'>
              <h2>Genre</h2>
              <p>{movie.Genre}</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2 className='d-inline-block' style={{ width: '5em'}}>Actors</h2> {movie.Actors || 'N/A'}
        </div>
        <div>
          <h2 className='d-inline-block' style={{ width: '5em'}}>Director</h2> {movie.Director || 'N/A'}
        </div>
        <div>
          <h2 className='d-inline-block' style={{ width: '5em'}}>Writers</h2> {movie.Writer || 'N/A'}
        </div>
      </div>
    </>
  );
};

export default Detail;
