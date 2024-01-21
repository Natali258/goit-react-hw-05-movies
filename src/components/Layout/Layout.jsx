import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { StyledHeader } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <Outlet />
    </div>
  );
};
