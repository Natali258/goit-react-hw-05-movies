// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/';
// const API_KEY =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjg1MDU2YTcwYjZhYzVhODZlM2FkNzY2NDdlOTQ0ZiIsInN1YiI6IjY1YThmZGNkMmM2YjdiMDEzNGExZmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPWgBG5Fg9u7VMxLBAJydcFE5Hz_3vgqy4FiOrzgEz8';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjg1MDU2YTcwYjZhYzVhODZlM2FkNzY2NDdlOTQ0ZiIsInN1YiI6IjY1YThmZGNkMmM2YjdiMDEzNGExZmI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPWgBG5Fg9u7VMxLBAJydcFE5Hz_3vgqy4FiOrzgEz8',
  },
};

export const FetchMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  )
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
};

export const FetchMoviesById = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  )
    .then(res => res.json())
    .catch(err => console.error('error:' + err));
};

export const FetchMoviesCredits = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const FetchMoviesReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const FetchSearchMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};
