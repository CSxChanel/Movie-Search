import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

// Get Movie Details
export const getMovieDetails = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};

// Get Movie Videos
export const getMovieVideos = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movie videos:", error);
        return [];
    }
};

// Get Trending Movies
export const getTrending = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/trending/movie/day?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
};

// Get Popular Movies
export const getPopular = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/popular?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

// Get Upcoming Movies
export const getUpcoming = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/upcoming?language=en-US&page=1&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching upcoming movies:", error);
        return [];
    }
};
// Get rekomendasi
export const getRecomend = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}/recommendations?language=en-US&page=1&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching recommens movie:", error);
        return [];
    }
};

// Search Movies
export const searchMovie = async q => {
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
    );
    return search.data;
};
