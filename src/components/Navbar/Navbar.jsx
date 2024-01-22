import React from 'react';

import { StyleLink, StyledNav } from './Navbar.styled';

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <StyleLink to="/">Home</StyleLink>
        <StyleLink to="/movies">Movies</StyleLink>
      </StyledNav>
    </>
  );
};

export default Navbar;
