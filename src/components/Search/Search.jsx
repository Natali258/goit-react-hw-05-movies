import React from 'react';
import {
  StyleSearchBtn,
  StyleSearchForm,
  StyleSearchInput,
} from './Search.styled';

const Search = ({ handleSetParams }) => {
  const handleSetParamsSearch = e => {
    e.preventDefault();
    handleSetParams({ query: e.target[0].value });
  };

  return (
    <StyleSearchForm action="" onSubmit={handleSetParamsSearch}>
      <StyleSearchInput type="text" />
      <StyleSearchBtn type="submit">Search</StyleSearchBtn>
    </StyleSearchForm>
  );
};

export default Search;
