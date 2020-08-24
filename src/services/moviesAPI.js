import axios from 'axios';

const API_KEY = '155381e5ea55326648abc3faf6598daf';

export const getTrendingMovies = () =>
  axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);

export const getMoviesByQuery = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

export const getMovieDetails = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );

export const getMovieCast = id =>
  axios.get(
    ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
  );

export const getMovieReviews = id =>
  axios.get(
    ` https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
