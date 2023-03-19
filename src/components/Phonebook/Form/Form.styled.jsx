import styled from '@emotion/styled';

const Form= styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    &input{
        width:200px;
    };
    padding: 15px 10px;
    width: 500px;
    border: 3px solid black;
    border-radius: 10px;
`;

export default Form;