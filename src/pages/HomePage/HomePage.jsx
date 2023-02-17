import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Notify } from 'notiflix';

import MovieList from 'shared/components/MovieList/MovieList';
import { fetchMovies } from 'services/moviesApi';

import { MainTitle } from 'shared/components/MovieList/movie-list.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(error => Notify.failure(error.response.data.status_message));
  }, []);

  return (
    <>
      <MainTitle>Trending today</MainTitle>
      <MovieList movies={movies} page={'movies/'} />
      <Outlet />
    </>
  );
};

export default HomePage;
