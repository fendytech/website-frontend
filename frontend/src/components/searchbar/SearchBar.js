import styled from 'styled-components';
import React from 'react';
import { Icon,Input } from 'antd';

const Search = styled.section`

`;

const SearchBar = ({ click }) => {

    let lockIcon = (
        <Icon type='search' theme='outlined' style={{ color: '#252A3D' }} />
    );

    return (
        <Search>
            <Input
                type='text'
                name='text'
                size='large'
                placeholder='Search your style'
                prefix={lockIcon}
            />
        </Search>
    );
};

export default SearchBar;
