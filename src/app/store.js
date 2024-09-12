import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../pages/Index/movieListSlice'

export default configureStore({
  reducer: {
    movieList: movieListReducer
  },
})

