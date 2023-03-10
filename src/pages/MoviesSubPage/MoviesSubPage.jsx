import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import useFetchMovies from 'hooks/useFetchMovies';

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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  return (
    <>
      {movie && (
        <>
          <BackBtn type="button" onClick={() => navigate(from)}>
            <FaLongArrowAltLeft />
            Go back
          </BackBtn>
          <MovieWrapper>
            <div>
              <img
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/w300/' + movie.poster_path
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
                <ItemLink to="cast" state={{ from }}>
                  Cast
                </ItemLink>
              </AddItem>
              <AddItem>
                <ItemLink to="reviews" state={{ from }}>
                  Reviews
                </ItemLink>
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
