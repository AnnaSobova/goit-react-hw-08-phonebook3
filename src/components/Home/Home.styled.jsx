import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-top: 100px;
  color: black;
`;

export const DevelopedBy = styled.p`
  margin: 5px 0;
  font-size: 28px;
  text-align: center;
  color: black;
`;

export const LinkIconsList = styled.div`
  list-style: none;
  display: flex;
  align-items:center;
  
  justify-content: center;
    display: grid;
    font-size: 18px;
    &:not(:last-child) {
      margin-right: 10px;
    
    & Link{
      color: black;
      transition: color 250ms linear;
      &:hover,
      &:focus {
        color: orangered;
      }
    }

  }
`;