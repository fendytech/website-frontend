import styled from 'styled-components';
import React from 'react';
import img from '../../assets/images/men.png'

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
        <Image src={img}/>
        <Textpara> Men </Textpara>  
        <Image src={img}/>
        <Textpara> Men </Textpara>  
        </Div>
    );
};

export default Category;
