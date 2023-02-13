import { List, ListItem, PosterThumb, ItemLink } from './movie-list.styled';

const MovieList = ({ movies, page }) => {
  return (
    <List>
      {movies.map(({ id, title, backdrop_path: image }) => (
        <ListItem key={id}>
          <ItemLink to={`${page}${id}`}>
            <PosterThumb>
              <img
                src={'https://image.tmdb.org/t/p/w500/' + image}
                alt={title}
              />
            </PosterThumb>
            <p>{title}</p>
          </ItemLink>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;
