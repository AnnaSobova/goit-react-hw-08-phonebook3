import styled from '@emotion/styled';

const FormStyled = styled.form`
  margin-top: 20px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & p {
    margin: 0;
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

export default FormStyled;