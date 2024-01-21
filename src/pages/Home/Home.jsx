import React, { useEffect, useState } from 'react';
import { FetchMovies } from '../../services/api';

import MovieList from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    FetchMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
