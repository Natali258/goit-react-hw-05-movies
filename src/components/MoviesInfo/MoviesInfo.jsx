import React from 'react';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesInfo = ({ movieDet }) => {
  // if (!movieDet) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div>
      <img
        src={
          movieDet.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDet.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h2>{movieDet.title || movieDet.name}</h2>
      <p>{movieDet.overview}</p>
      <p>Vote average: {movieDet.vote_average}</p>
      <p>Release date: {movieDet.release_date}</p>
      {/* <p>Production countries: {movieDet.production_countries[0].name}</p> */}
    </div>
  );
};

export default MoviesInfo;
