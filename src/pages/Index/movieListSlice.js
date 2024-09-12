import { createSlice } from "@reduxjs/toolkit";

export const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        query: ["Star Wars", "Harry Potter", "Marvel", "Superman", "Lord of the Rings"][Math.floor(Math.random() * 5)],
        page: 1,
        movies: [],
        loadingNextPage: false,
        endOfPage: false
    },

    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
            state.page = 1;
            state.movies = [];
            state.endOfPage = false;
        },

        incrementPage: (state) => {
            state.page++;
        },

        setBottomOfPage: (state) => {
            state.endOfPage = true;
        },

        toggleLoadingNextPage: (state) => {
            state.loadingNextPage = !state.loadingNextPage;
        },

        setMovieList: (state, action) => {
            state.movies = action.payload
        }
    }
});

export function fetchMovies() {
    return async (dispatch, getState) => {
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

export function nextPage() {
    return async (dispatch, getState) => {
        const {endOfPage, loadingNextPage} = getState().movieList;
        if (endOfPage || loadingNextPage) {
            return;
        }

        dispatch(incrementPage());
        dispatch(toggleLoadingNextPage());
        const { page, query, movies } = getState().movieList;
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
        const newMovies = await response.json();

        if (!newMovies.Search) {
            dispatch(setBottomOfPage());
            return;
        }
        dispatch(setMovieList([...movies, ...newMovies.Search]));
        dispatch(toggleLoadingNextPage());
    }
}

export const { setSearchQuery, setMovieList, toggleLoadingNextPage, incrementPage, setBottomOfPage } = movieListSlice.actions;
export default movieListSlice.reducer;