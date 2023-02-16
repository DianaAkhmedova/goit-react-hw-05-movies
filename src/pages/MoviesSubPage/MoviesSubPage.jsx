import { FaLongArrowAltLeft } from 'react-icons/fa';
import useFetchMovies from 'hooks/useFetchMovies';
import { Outlet } from 'react-router-dom';

import noPoster from '../../components/images/poster.png';

import {
  BackBtn,
  MovieWrapper,
  MovieInfo,
  MovieTitle,
  SubTitle,
  Description,
  AddInfo,
  List,
  AddItem,
  ItemLink,
} from './movies-sub-page.styled';

const MoviesSubPage = () => {
  const movie = useFetchMovies();

  return (
    <>
      {movie && (
        <>
          <BackBtn type="button">
            <FaLongArrowAltLeft />
            Go back
          </BackBtn>
          <MovieWrapper>
            <div>
              <img
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                    : noPoster
                }
                alt={movie.title}
              />
            </div>
            <MovieInfo>
              <MovieTitle>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </MovieTitle>

              <Description>
                User Score: {(movie.vote_average * 10).toFixed(0)}%
              </Description>
              <SubTitle>Overview</SubTitle>
              <Description>{movie.overview}</Description>
              <SubTitle>Genres</SubTitle>
              <Description>
                {movie.genres.map(genres => genres.name).join(', ')}
              </Description>
            </MovieInfo>
          </MovieWrapper>
          <AddInfo>
            <SubTitle>Additional information</SubTitle>
            <List>
              <AddItem>
                <ItemLink to={'cast'}>Cast</ItemLink>
              </AddItem>
              <AddItem>
                <ItemLink to={'reviews'}>Reviews</ItemLink>
              </AddItem>
            </List>
            <Outlet />
          </AddInfo>
        </>
      )}
    </>
  );
};

export default MoviesSubPage;
