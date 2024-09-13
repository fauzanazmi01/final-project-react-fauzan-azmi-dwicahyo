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
    return async (dispatch, getState, extraArgument) => {
        const { page, query, movies } = getState().movieList;
        const { movieService, apiKey } = extraArgument;
        try {
            const newMovies = await movieService.getMovies({ query, page, apiKey });
            dispatch(setMovieList([...movies, ...newMovies]));
        } catch (error) {
            console.error(error);
        }
    }
}

export function nextPage() {
    return async (dispatch, getState, extraArgument) => {
        const {endOfPage, loadingNextPage} = getState().movieList;
        if (endOfPage || loadingNextPage) {
            return;
        }

        dispatch(incrementPage());
        dispatch(toggleLoadingNextPage());
        const { page, query, movies } = getState().movieList;
        const { movieService, apiKey } = extraArgument;
        try {
            const newMovies = await movieService.getMovies({ query, page, apiKey });
            dispatch(setMovieList([...movies, ...newMovies]));
        }
        catch (error) {
            console.error(error);
            dispatch(setBottomOfPage());
        }
        finally {
            dispatch(toggleLoadingNextPage());
        }
    }
}

export const { setSearchQuery, setMovieList, toggleLoadingNextPage, incrementPage, setBottomOfPage } = movieListSlice.actions;
export default movieListSlice.reducer;