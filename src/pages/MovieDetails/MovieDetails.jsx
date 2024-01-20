import React, { useEffect, useState } from 'react';
import {
  FetchMoviesById,
  FetchMoviesCredits,
  FetchMoviesReviews,
} from '../../services/api';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import MoviesInfo from 'components/MoviesInfo/MoviesInfo';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDet, setMovieDet] = useState({});
  const [actors, setActors] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    FetchMoviesById(movieId).then(res => setMovieDet(res));
  }, [movieId]);

  return (
    <div>
      <MoviesInfo movieDet={movieDet} />
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink
            to="cast"
            onClick={() =>
              FetchMoviesCredits(movieId).then(res => setActors(res.cast))
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            onClick={() =>
              FetchMoviesReviews(movieId).then(res => setReviews(res.results))
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet context={[actors, reviews]} />
      {/* {actors.length > 0 && <Cast actors={actors} />} */}
      {/* {reviews.length > 0 && <Reviews reviews={reviews} />} */}
    </div>
  );
};

export default MovieDetails;
