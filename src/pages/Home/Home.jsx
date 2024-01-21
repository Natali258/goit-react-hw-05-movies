import React, { useEffect, useState } from 'react';
import { FetchMovies } from '../../services/api';

import MovieList from 'components/MovieList/MovieList';
import { StyleTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchMovies().then(res => setMovies(res.results));
  }, []);

  return (
    <div>
      <StyleTitle>Trending today</StyleTitle>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
