import styled from 'styled-components';

export const Author = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #6e6d7a;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
