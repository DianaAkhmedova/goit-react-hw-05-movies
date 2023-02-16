import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MoviesSubPage from 'pages/MoviesSubPage/MoviesSubPage';
import MovieCastsPage from 'pages/MovieCastPage/MovieCastPage';
import MovieReviewsPage from 'pages/MovieReviewsPage/MovieReviewsPage';

export const App = () => {
  return (
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
  );
};
