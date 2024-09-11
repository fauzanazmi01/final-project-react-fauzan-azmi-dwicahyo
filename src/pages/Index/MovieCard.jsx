import React from 'react';

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
        <a className="card text-decoration-none bg-body-secondary" href="#">
            <img className="card-img-top" src={movie.Poster} style={{ height: '400px' }}></img>
            <div className="card-body" style={{ height: '7em' }}>
                <h5 className="card-title">{truncate(movie.Title, 55)}</h5>
            </div>
        </a>
    );
};

export default MovieCard;
