import React, { useEffect, useState } from 'react';
import { FetchMoviesCredits } from '../../services/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    FetchMoviesCredits(movieId).then(res => setActors(res.cast));
  }, [movieId]);
  return (
    <div>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
