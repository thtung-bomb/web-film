import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getMovieByGenreId = (id) => (axios.get(movieByGenreBaseURL + "&with_genres=" + id));

const getMovieDetails = (id) => (axios.get(`${movieBaseUrl}/movie/${id}?api_key=${api_key}`));

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=YOUR_API_KEY.
const getMovieIntro = (id) => (axios.get(`${movieBaseUrl}/movie/${id}/videos?api_key=${api_key}`))

export default {
    getTrendingVideos,
    getMovieByGenreId,
    getMovieDetails,
    getMovieIntro
}
