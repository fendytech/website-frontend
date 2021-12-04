import { Carousel } from 'antd';

import TopNavigation from "../../components/category-finder/TopNavigation";
import Navbar from "../../components/navbar/Navbar";

import './home.scss';

const Home = () => {

    return (
        <>
            <Navbar />
            <TopNavigation />
            <div className={'home_screen_carousel'}>
                <Carousel effect="fade">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        </>

    );
};

export default Home;
