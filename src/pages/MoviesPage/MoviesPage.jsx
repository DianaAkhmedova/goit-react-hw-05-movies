import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import MovieList from 'shared/components/MovieList/MovieList';
import { fetchMoviesByName } from 'services/moviesApi';

import { SearchForm, Label, Input, SearchBtn } from './movies-page.styled';

Notify.init({ position: 'center-top', distance: '70px' });

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const { id } = useParams();

  useEffect(() => {
    if (movieName === '' || movieName === null) {
      return;
    }

    fetchMoviesByName(movieName)
      .then(setMovies)
      .catch(error => Notify.failure(error.response.data.status_message));
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.elements.searchQuery.value) {
      Notify.failure('Enter a search query');
      return;
    }
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
