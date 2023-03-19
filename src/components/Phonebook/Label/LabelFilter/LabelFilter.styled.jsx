import styled from '@emotion/styled';

const LabelFilterStyle = styled.label`
  margin: 0;
  font-size: 24px;
  &p{
    margin:0;
    padding:0;

    font-size:16px;
  }
  &input{
    margin-top:o;
    margin-bottom:10px;
    border-radius:2%;
    border: 2px solid black;
    outline: none;
    font-size:24px;

    transition: border-color 250ms linear;
    &:focus-visible{
      border-color:orangered;
    }
    
  }
`;

export default LabelFilterStyle;