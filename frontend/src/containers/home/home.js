import TopNavigation from "../../components/category-finder/TopNavigation";
import Navbar from "../../components/navbar/Navbar";
import { Carousel } from 'antd';
import styled from 'styled-components';

const ContentStyle = styled.h3 `
    
  `;

const Home = () => {


    return (
        <>
            <Navbar />
            <TopNavigation />
            <Carousel effect="fade">
                <div>
                    <ContentStyle>1</ContentStyle>
                </div>
                <div>
                    <ContentStyle>2</ContentStyle>
                </div>
                <div>
                    <ContentStyle>3</ContentStyle>
                </div>
                <div>
                    <ContentStyle>4</ContentStyle>
                </div>
            </Carousel>
        </>

    );
};

export default Home;
