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
      <Link to={btnGoBack}>&#10229;Go back</Link>
      <MoviesInfo movieDet={movieDet} />
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
