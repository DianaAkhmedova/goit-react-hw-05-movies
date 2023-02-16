import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'services/moviesApi';
import noPhoto from '../../components/images/no-photo.png';
import {
  CastList,
  Item,
  PhotoThumb,
  CastPhoto,
  Descr,
} from './movie-cast-page.styled';

const MovieCastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

  console.log(cast);

  return (
    <>
      {cast.length ? (
        <CastList>
          {cast.map(({ id, name, profile_path: photo }) => (
            <Item key={id}>
              <PhotoThumb>
                <CastPhoto
                  src={
                    photo ? 'https://image.tmdb.org/t/p/w200/' + photo : noPhoto
                  }
                  alt={name}
                />
              </PhotoThumb>

              <Descr>{name}</Descr>
            </Item>
          ))}
        </CastList>
      ) : (
        <p>Sorry... Cast of actors not found</p>
      )}
    </>
  );
};

export default MovieCastPage;
