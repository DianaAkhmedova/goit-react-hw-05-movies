import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/moviesApi';

import { Item, Author, Content } from './movie-reviews-page.styled';

const MovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </Item>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default MovieReviewsPage;
