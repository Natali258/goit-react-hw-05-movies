import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 30px;
`;

export const StyleLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #62687c;
  &.active {
    color: black;
  }
`;
