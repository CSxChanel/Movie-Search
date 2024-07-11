// stores/MovieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    isLoading: false
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setMovies, setIsLoading } = movieSlice.actions;
export default movieSlice.reducer;
