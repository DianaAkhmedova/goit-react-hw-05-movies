import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieById } from 'services/moviesApi';

const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);

  return movie;
};

export default useFetchMovies;
