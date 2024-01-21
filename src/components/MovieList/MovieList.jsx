import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyleMovieList } from './MovieList.styled';
import styled from 'styled-components';

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

const StyleMovieLink = styled(Link)`
  display: flex;
  padding: 0;
  color: #62687c;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
