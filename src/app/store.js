import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../pages/Index/movieListSlice'
import MovieService from '../services/movieService'

export default configureStore({
  reducer: {
    movieList: movieListReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        movieService: MovieService,
        apiKey: process.env.REACT_APP_OMDB_API_KEY
      }
    }
  })
})

