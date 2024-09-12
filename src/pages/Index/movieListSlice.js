import { createSlice } from "@reduxjs/toolkit";

export const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        query: ["Star Wars", "Harry Potter", "Marvel", "Superman", "Lord of the Rings"][Math.floor(Math.random() * 5)],
        movies: []
    },

    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },

        setMovieList: (state, action) => {
            state.movies = action.payload
        }
    }
});

export function fetchMovies() {
    return async (dispatch, getState) => {
        dispatch(setMovieList([]));

        const { query } = getState().movieList;
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
            const movies = await response.json();

            if (!movies.Search) {
                console.error("No movies found");
                return;
            }

            dispatch(setMovieList(movies.Search));
        } catch (error) {
            console.error(error);
        }
    }
}

export const { setSearchQuery, setMovieList } = movieListSlice.actions;
export default movieListSlice.reducer;