import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMoviesReviews } from '../../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    FetchMoviesReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>We don't have any reviews for this movie!</h3>
  ) : (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>Content: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
