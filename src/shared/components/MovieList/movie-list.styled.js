import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainTitle = styled.h1`
  margin-bottom: 20px;

  color: #0d0c22;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;

export const ListItem = styled.li`
  padding: 10px 16px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 10px;
  color: #0d0c22;
`;

export const PosterThumb = styled.div`
  width: 300px;
  height: 450px;
  margin-bottom: 20px;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  font-size: 16px;
`;
