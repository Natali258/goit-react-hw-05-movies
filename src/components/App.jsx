import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
