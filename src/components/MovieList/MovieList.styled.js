import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyleMovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`;

export const StyleMovieLink = styled(Link)`
  display: flex;
  padding: 0;
  color: #62687c;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
