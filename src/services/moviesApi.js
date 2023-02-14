import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    page: 1,
    api_key: 'c1b8c874be54ebc5c34c225dbd6a36f5',
    language: 'en',
  },
});

export const fetchMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  console.log(data.results);

  return data.results;
};

export const fetchMoviesById = async id => {
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
