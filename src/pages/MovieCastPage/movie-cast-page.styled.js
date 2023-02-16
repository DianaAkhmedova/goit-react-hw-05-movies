import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  padding: 5px;
  flex-basis: calc((100% - 50px) / 6);
`;

export const PhotoThumb = styled.div`
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
`;

export const CastPhoto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const Descr = styled.p`
  color: #6e6d7a;
`;
