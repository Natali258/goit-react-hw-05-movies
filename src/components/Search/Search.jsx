import React, { useEffect, useState } from 'react';
import { FetchSearchMovies } from '../../services/api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query !== '') {
      FetchSearchMovies(query).then(res => setSearchMovies(res.results));
      setQuery('');
    }
  }, [query]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery !== null) {
      setQuery(searchQuery);
    }
  }, [searchParams]);

  const handleSetParams = e => {
    e.preventDefault();
    setQuery(e.target[0].value);
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSetParams}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </div>
  );
};

export default Search;
