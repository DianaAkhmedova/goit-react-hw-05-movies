import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    page: 1,
    api_key: 'c1b8c874be54ebc5c34c225dbd6a36f5',
    language: 'en-US',
  },
});

export const fetchMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMoviesByName = async query => {
  const { data } = await instance.get('/search/movie?', {
    params: {
      query,
    },
  });

  return data.results;
};

export const fetchMovieCast = async id => {
  const {
    data: { cast },
  } = await instance.get(`/movie/${id}/credits`);
  return cast;
};

export const fetchMovieReviews = async id => {
  const {
    data: { results },
  } = await instance.get(`/movie/${id}/reviews`);
  return results;
};
