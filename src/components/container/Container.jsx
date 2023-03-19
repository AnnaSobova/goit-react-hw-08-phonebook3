import React from 'react';
import PropTypes from 'prop-types';
import {MainContainer, Title} from './Container.styled'


const Container =({title, children})=>(
    <>
     <MainContainer>
        <Title>{title} </Title>
        {children}
    </MainContainer>
    </>
   
);
export default Container;

Container.propTypes={
    title:PropTypes.string.isRequired,
};

