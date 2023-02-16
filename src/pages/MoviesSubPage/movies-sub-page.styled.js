import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  min-width: 30px;
  padding: 10px;
  color: #6e6d7a;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;

  transition: color 200ms ease;

  svg {
    margin-right: 10px;
  }

  &:hover,
  :focus {
    color: #0d0c22;
    outline-width: 0;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0;
`;

export const MovieInfo = styled.div`
  max-width: 700px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
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

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const AddItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #6e6d7a;
  transition: color 200ms ease;

  &:hover,
  :focus {
    color: #0d0c22;
  }
`;
