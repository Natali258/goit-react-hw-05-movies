import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const [_, reviews] = useOutletContext();
  return (
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
