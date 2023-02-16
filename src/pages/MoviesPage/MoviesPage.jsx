import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useParams } from 'react-router-dom';

import MovieList from 'shared/components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/moviesApi';

import { SearchForm, Label, Input, SearchBtn } from './movies-page.styled';

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
        <SearchForm onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="searchQuery"
              autoFocus={true}
              placeholder="Movie search"
            />
          </Label>

          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
      )}
      {!id && Boolean(movies.length) && <MovieList movies={movies} page={''} />}

      <Outlet />
    </>
  );
};

export default MoviesPage;
