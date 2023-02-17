import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import { fetchMovieById } from 'services/moviesApi';

const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById(id)
      .then(setMovie)
      .catch(error => Notify.failure(error.response.data.status_message));
  }, [id]);

  return movie;
};

export default useFetchMovies;
