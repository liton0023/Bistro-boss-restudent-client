import React from 'react';
import BistroAbout from '../BistroAbout/BistroAbout';
import Catagory from '../Catagory/Catagory';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagory></Catagory>
           <BistroAbout></BistroAbout>
           <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Home;