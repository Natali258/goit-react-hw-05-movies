import React, { useEffect, useState } from 'react';
import { FetchMovies } from '../../services/api';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
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
