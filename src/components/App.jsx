import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesSubPage = lazy(() => import('pages/MoviesSubPage/MoviesSubPage'));
const MovieCastsPage = lazy(() => import('pages/MovieCastPage/MovieCastPage'));
const MovieReviewsPage = lazy(() =>
  import('pages/MovieReviewsPage/MovieReviewsPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":id" element={<MoviesSubPage />}>
              <Route path="cast" element={<MovieCastsPage />} />
              <Route path="reviews" element={<MovieReviewsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
