import styled from 'styled-components';
import React from 'react';
import men from "../../assets/images/men.png"
import Category from './Category';

const Search = styled.div`
display:flex;
justify-content:space-around;
`;

const TopNavigation = () => {

    return (
        <Search>
            <Category image={men} text="Men" />
            <Category image={men} text="Men" />
            <Category image={men} text="Men" />
            <Category image={men} text="Men" />
        </Search>
    );
};

export default TopNavigation;
