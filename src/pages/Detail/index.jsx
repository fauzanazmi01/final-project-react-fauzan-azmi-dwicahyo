import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

import Loading from '../../components/Loading';
import MovieDetail from './MovieDetail';

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()

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
        if (!movie.Title) {
          return navigate("/");
        }
        setMovie(movie);
      } catch (error) {
        console.error(error);
        return navigate("/");
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <Navbar />
      {
        Object.keys(movie).length === 0
          ?
          <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <Loading />
          </div>
          :
          <MovieDetail movie={movie} />
      }
    </>
  );
};

export default Detail;
