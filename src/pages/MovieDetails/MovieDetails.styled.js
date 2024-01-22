import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyleLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #e64293a1;
  &.active {
    color: black;
  }
  &:hover {
    color: #62687c;
  }
`;

export const StyleGoBack = styled(Link)`
  display: block;
  margin: 10px 5px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #e64293a1;
  &.active {
    color: #62687c;
  }
`;
