import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  & span {
    font-size: 20px;
  }
  & input {
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 2%;
    border: 2px solid black;
    outline: none;
    font-size: 24px;
    transition: border-color 250ms linear;
    &:focus-visible {
      border-color: orangered;
    }
  }
  
`;

export default Label;