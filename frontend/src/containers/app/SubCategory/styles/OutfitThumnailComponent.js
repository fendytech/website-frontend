import styled from "styled-components";

export const OutfitThumbnailContainer = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 350px;
justify-content: center;
`;

export const OutfitThumbnail = styled.img`
width: 250px;
overflow: hidden;
height: 250px;
`;

export const SubCategoryTitle = styled.div`
font-size: 26px;
align-self:center;
`;

export const SubCategoryContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-flow: rows;
align-items: center;
justify-items: center;
`