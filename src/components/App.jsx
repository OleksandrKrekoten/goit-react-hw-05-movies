import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';

import { NotFound } from './NotFound/NotFound';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
