import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const MovieInfo = styled.div`
  max-width: 700px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
`;

export const Overview = styled.h3`
  margin-bottom: 20px;
`;

export const Genres = styled.h4`
  margin-bottom: 20px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const AddInfo = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ececec;
  font-size: 18px;
`;

export const AddItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #6e6d7a;
  transition: color 200ms ease;

  &:hover,
  :focus {
    color: #0d0c22;
  }
`;
