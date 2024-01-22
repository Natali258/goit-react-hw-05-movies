import React, { useEffect, useState } from 'react';
import { FetchSearchMovies } from '../../services/api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { StyleSearchContainer } from './Movies.styled';
import Search from 'components/Search/Search';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery !== null) {
      FetchSearchMovies(searchQuery).then(res => setSearchMovies(res.results));
    }
  }, [searchParams]);
  const handleSetParams = ({ query }) => {
    setSearchParams({ query });
  };
  return (
    <StyleSearchContainer>
      <Search handleSetParams={handleSetParams} />
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </StyleSearchContainer>
  );
};

export default Movies;
