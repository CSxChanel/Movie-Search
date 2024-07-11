// store.js
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../stores/MovieSlice.jsx"; // Sesuaikan jalur jika diperlukan

export const store = configureStore({
    reducer: {
        movies: movieReducer
    }
});

export default store;
