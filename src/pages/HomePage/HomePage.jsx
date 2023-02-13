import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import MovieList from 'shared/components/MovieList/MovieList';
import { fetchMovies } from 'services/moviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <>
      <MovieList movies={movies} page={'movies/'} />
      <Outlet />
    </>
  );
};

export default HomePage;
