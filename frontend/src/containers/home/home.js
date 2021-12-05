import { Carousel } from 'antd';

import TopNavigation from "../../components/category-finder/TopNavigation";

import './home.scss';

const urlsList = ["https://picsum.photos/200/300", "https://picsum.photos/200/300?grayscale", "https://picsum.photos/id/237/200/300", "https://picsum.photos/id/0/200/300"];

const Home = () => {
    return (
        <>
            <TopNavigation />
            <div className={'home_screen_carousel'}>
                <Carousel effect="fade" autoplay autoplaySpeed={1000} >
                    {
                        urlsList?.length > 0 && urlsList.map((url, urlIndex) =>
                            <img src={url} key={urlIndex} alt="banner" className="banner-image" />
                        )
                    }
                </Carousel>
            </div>
        </>

    );
};

export default Home;
