import styled from 'styled-components';
import React from 'react';

const Image = styled.img`
border-radius: 50%; 
width: 50px;
height: 50px;
padding:5px;
`;

const Div = styled.div`
display:flex;
align-items:center;
`;


const Textpara = styled.div`
font-weight:900;
padding:10px 10px 10px 0px;
`;

const Category = ({image,text}) => {

    return (
        <Div>
        <Image src={image}/>
        <Textpara> {text} </Textpara>  
        </Div>
    );
};

export default Category;
