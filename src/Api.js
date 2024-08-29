import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;
// GetCast
export const getCast = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}/credits?language=en-US&api_key=${apiKey}`
        );
        return response.data.cast || [];
    } catch (error) {
        console.error("Error fetching data cast:", error);
        return [];
    }
};

// Get Tv Detail
export const getTvDetails = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/tv/${id}?language=en-US&api_key=${apiKey}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching tv details:", error);
        return null;
    }
};

// Get Tv Playing
export const getTvPlaying = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/tv/${id}/videos?language=en-US&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching tv videos:", error);
        return [];
    }
};

// Get Tv trending
export const getTvDiscover = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/trending/tv/day?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching Tv top_rated movies:", error);
        return [];
    }
};
// Get Tv Top Rated
export const getTvTopRated = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/tv/top_rated?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching Tv top_rated movies:", error);
        return [];
    }
};

// Get Tvrekomendasi
export const getTvRecomend = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/tv/${id}/recommendations?language=en-US&page=1&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching recommens movie:", error);
        return [];
    }
};

// Get Movie Videos
export const getMovieVideos = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}/videos?language=en-US&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movie videos:", error);
        return [];
    }
};
// Get Movie Details
export const getMovieDetails = async id => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/${id}?language=en-US&api_key=${apiKey}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};

// Get Now_playing Movies
export const getNowPlaying = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/now_playing?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching Playing movies:", error);
        return [];
    }
};

// Get Top Rated Movies
export const getTopRated = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/movie/top_rated?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching top_rated movies:", error);
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

// Get Trending
export const getTrending = async (page = 1) => {
    try {
        const response = await axios.get(
            `${baseUrl}/trending/movie/day?language=en-US&page=${page}&region=ID&api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching Tranding movies:", error);
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
