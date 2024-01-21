import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id.toString()}`}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
