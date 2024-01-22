import styled from 'styled-components';

export const StyleSearchForm = styled.form`
  display: flex;
  gap: 25px;
`;

export const StyleSearchInput = styled.input`
  display: flex;
  padding: 5px 10px;
  border: 3px solid #e64293a1;
  outline: none;
`;

export const StyleSearchBtn = styled.button`
  display: flex;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #e64293a1;
  font-weight: bolt;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #62687c;
    color: white;
  }
`;
