import React, { useEffect, useState } from 'react';
import { FetchMoviesById } from '../../services/api';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import MoviesInfo from 'components/MoviesInfo/MoviesInfo';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDet, setMovieDet] = useState({});
  const location = useLocation();

  useEffect(() => {
    FetchMoviesById(movieId).then(res => setMovieDet(res));
  }, [movieId]);

  const btnGoBack = location.state?.from ?? '/movies';

  return (
    <div>
      <StyleGoBack to={btnGoBack}>&#10229;Go back</StyleGoBack>
      <MoviesInfo movieDet={movieDet} />
      <h2>Additional Information</h2>
      <ul>
        <li>
          <StyleLink to="cast" state={location.state}>
            Cast...
          </StyleLink>
        </li>
        <li>
          <StyleLink to="reviews" state={location.state}>
            Reviews...
          </StyleLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

const StyleLink = styled(NavLink)`
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

const StyleGoBack = styled(Link)`
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
