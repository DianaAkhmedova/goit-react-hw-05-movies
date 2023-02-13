import { FaLongArrowAltLeft } from 'react-icons/fa';
import useFetchMovies from 'hooks/useFetchMovies';

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
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>

            <p>User Score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genres => genres.name).join(', ')}</p>
          </div>
        </>
      )}
    </>
  );
};

export default MoviesSubPage;
