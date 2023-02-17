import { useLocation } from 'react-router-dom';

import noPoster from '../../../components/images/poster.png';

import {
  List,
  ListItem,
  PosterThumb,
  ItemLink,
  MovieTitle,
} from './movie-list.styled';

const MovieList = ({ movies, page }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path: poster }) => (
          <ListItem key={id}>
            <ItemLink to={`${page}${id}`} state={{ from: location }}>
              <PosterThumb>
                <img
                  src={
                    poster
                      ? 'https://image.tmdb.org/t/p/w300/' + poster
                      : noPoster
                  }
                  alt={title}
                />
              </PosterThumb>
              <MovieTitle>{title}</MovieTitle>
            </ItemLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MovieList;
