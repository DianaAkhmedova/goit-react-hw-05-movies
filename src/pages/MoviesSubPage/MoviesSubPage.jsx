import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFetchMovies from 'hooks/useFetchMovies';

import {
  MovieWrapper,
  MovieInfo,
  MovieTitle,
  Overview,
  Genres,
  Description,
  AddInfo,
  AddItem,
  ItemLink,
} from './movies-sub-page.styled';

const MoviesSubPage = () => {
  const movie = useFetchMovies();

  return (
    <>
      {movie && (
        <>
          <button type="button">
            <FaLongArrowAltLeft />
            Go back
          </button>
          <MovieWrapper>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>

              <Description>User Score: {movie.vote_average * 10}%</Description>
              <Overview>Overview</Overview>
              <Description>{movie.overview}</Description>
              <Genres>Genres</Genres>
              <Description>
                {movie.genres.map(genres => genres.name).join(', ')}
              </Description>
              <AddInfo>
                <Description>Additional information</Description>
                <ul>
                  <AddItem>
                    <ItemLink to={'cast'}>Cast</ItemLink>
                  </AddItem>
                  <AddItem>
                    <ItemLink to={'reviews'}>Reviews</ItemLink>
                  </AddItem>
                </ul>
              </AddInfo>
            </MovieInfo>
          </MovieWrapper>
        </>
      )}
    </>
  );
};

export default MoviesSubPage;
