import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyleMovieLink, StyleMovieList } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <StyleMovieList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyleMovieLink
              state={{ from: location }}
              to={`/movies/${movie.id.toString()}`}
            >
              {movie.title || movie.name}
            </StyleMovieLink>
          </li>
        ))}
      </StyleMovieList>
    </div>
  );
};

export default MovieList;
