import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie data using the id from useParams
    // Example: fetchMovieData(id).then(data => setMovie(data));
    // const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process}`);
  }, [id]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Detail;
