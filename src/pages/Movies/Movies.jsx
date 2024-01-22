import React, { useEffect, useState } from 'react';
import { FetchSearchMovies } from '../../services/api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import {
  StyleSearchBtn,
  StyleSearchContainer,
  StyleSearchForm,
  StyleSearchInput,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query !== '') {
      FetchSearchMovies(query).then(res => setSearchMovies(res.results));
      setQuery('');
    }

    const searchQuery = searchParams.get('query');
    if (searchQuery !== null) {
      setQuery(searchQuery);
    }
  }, [query, searchParams]);
  const handleSetParams = e => {
    e.preventDefault();
    setQuery(e.target[0].value);
    setSearchParams({ query: e.target[0].value });
  };
  return (
    <StyleSearchContainer>
      <StyleSearchForm action="" onSubmit={handleSetParams}>
        <StyleSearchInput type="text" />
        <StyleSearchBtn type="submit">Search</StyleSearchBtn>
      </StyleSearchForm>
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </StyleSearchContainer>
  );
};

export default Movies;
