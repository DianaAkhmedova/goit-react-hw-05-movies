import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useParams } from 'react-router-dom';

import MovieList from 'shared/components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const { id } = useParams();

  useEffect(() => {
    if (movieName === '' || movieName === null) return;

    fetchMoviesByName(movieName).then(setMovies);
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <>
      {!id && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="searchQuery" />
          <button type="submit">Search</button>
        </form>
      )}
      {!id && Boolean(movies.length) && <MovieList movies={movies} page={''} />}

      <Outlet />
    </>
  );
};

export default MoviesPage;
