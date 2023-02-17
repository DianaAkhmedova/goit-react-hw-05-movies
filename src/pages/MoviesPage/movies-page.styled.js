import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-right: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }

  &:focus {
    outline-width: 0;
  }
`;

export const SearchBtn = styled.button`
  min-width: 30px;
  padding: 10px;
  color: #6e6d7a;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  transition: color 200ms ease;

  &:hover,
  :focus {
    color: #0d0c22;
    outline-width: 0;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;
