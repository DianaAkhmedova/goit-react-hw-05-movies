import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesById } from 'services/moviesApi';

const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesById(id).then(setMovie);
  }, [id]);

  return movie;
};

export default useFetchMovies;
