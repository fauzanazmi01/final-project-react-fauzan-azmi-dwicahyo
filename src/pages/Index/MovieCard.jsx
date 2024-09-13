import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

function truncate(str, n) {
    if (str.length <= n) {
        return str;
    }
    const words = str.split(' ');
    let truncatedStr = '';
    for (let word of words) {
        if ((truncatedStr + word).length > n) {
            break;
        }
        truncatedStr += (truncatedStr ? ' ' : '') + word;
    }
    return truncatedStr + '...';
}

const MovieCard = ({ movie  }) => {
    return (
        <Link to={movie.imdbID} className="card text-decoration-none bg-body-secondary">
            {movie.Poster !== 'N/A' ? <img src={movie.Poster} className="card-img" alt={`${movie.Title} cover`} style={{ height: '300px', objectFit: 'cover' }}></img> : <div className="d-flex justify-content-center align-items-center text-bg-primary" style={{ height: '300px' }}>No Image</div>}
            <div className={`card-body ${styles.cardBody}`}>
                <h5 className="card-title">{truncate(movie.Title, 40)}</h5>
            </div>
        </Link>
    );
};

export default MovieCard;
