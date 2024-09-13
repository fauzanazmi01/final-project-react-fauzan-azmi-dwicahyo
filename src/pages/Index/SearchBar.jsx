import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setSearchQuery } from './movieListSlice';

export default function SearchBar() {
  const reduxQuery = useSelector((state) => state.movieList.query);
  const [query, setQuery] = React.useState(reduxQuery);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query))
    dispatch(fetchMovies());
  }

  return (
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={handleSearchChange}></input>
        <button className="btn btn-primary" type="submit" onClick={submit}>Search</button>
    </form>
  )
}
