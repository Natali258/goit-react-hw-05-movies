import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './Navbar.styled';
import styled from 'styled-components';

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

const StyleLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #62687c;
  &.active {
    color: black;
  }
`;
