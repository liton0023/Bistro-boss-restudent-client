import React from 'react';
import BistroAbout from '../BistroAbout/BistroAbout';
import Catagory from '../Catagory/Catagory';
import Featured from '../Featured/Featured';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
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