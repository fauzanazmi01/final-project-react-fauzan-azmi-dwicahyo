import Poster from './Poster';
import RatingBox from './RatingBox';
import MetascoreBox from './MetascoreBox';
import Trophy from './Trophy';

export default function MovieDetail({movie}) {
  return (
    <div className='container my-4'>
      <div className='row gx-4 mb-2'>
        <div className='col-12 col-lg-4 col-xxl-3 mb-3 mb-lg-0 d-flex justify-content-center'>
          <Poster link={movie.Poster} />
        </div>
        <div className='col'>
          <h1 className='mb-1'>{movie.Title || 'N/A'} <span className='fs-6 fw-light'>{movie.Type}</span></h1>
          <div className='mb-3'>
            {movie.Year} | {movie.Rated} | {movie.Runtime}
          </div>
          <div className='container mb-3'>
            <div className='row gap-2 justify-content-center'>
              <RatingBox rating={movie.imdbRating} votes={movie.imdbVotes} />
              {
                (movie.Metascore !== 'N/A') && (
                  <MetascoreBox rating={movie.Metascore} />
                )
              }
            </div>
          </div>
          {movie.Awards !== "N/A" && (<div className='alert'>
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
        <h2 className='d-inline-block' style={{ width: '5em' }}>Actors</h2> {movie.Actors || 'N/A'}
      </div>
      <div>
        <h2 className='d-inline-block' style={{ width: '5em' }}>Director</h2> {movie.Director || 'N/A'}
      </div>
      <div>
        <h2 className='d-inline-block' style={{ width: '5em' }}>Writers</h2> {movie.Writer || 'N/A'}
      </div>
    </div>
  )
}
