import axios from 'axios';
const API_KEY = 'ba12bbb2efd4020faab2c5dd14dc19c0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};
export const getMovieByName = async query => {
  return await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMovieById = async id => {
  return await axios.get(`/movie/${id}?api_key=${API_KEY}`);
};

export const getCast = async id => {
  return await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
};
export const getRewies = async id => {
  return await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
};
