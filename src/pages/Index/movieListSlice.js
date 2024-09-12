import { createSlice } from "@reduxjs/toolkit";

export const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        query: "disney",
        movies: []
    },

    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
            console.log(state.query);
        },

        setMovieList: (state, action) => {
            state.movies = action.payload
        }
    }
});

export const { setSearchQuery, setMovieList } = movieListSlice.actions;
export default movieListSlice.reducer;