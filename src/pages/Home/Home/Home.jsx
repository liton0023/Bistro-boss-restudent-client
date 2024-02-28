
import { Helmet } from 'react-helmet-async';
import BistroAbout from '../BistroAbout/BistroAbout';
import Catagory from '../Catagory/Catagory';
import Featured from '../Featured/Featured';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>BISTRO BOSS | HOME</title>
          </Helmet>
           <Banner></Banner>
           <Catagory></Catagory>
           <BistroAbout></BistroAbout>
           <PopulerMenu></PopulerMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;