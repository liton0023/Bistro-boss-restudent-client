import React from 'react';
import BistroAbout from '../BistroAbout/BistroAbout';
import Catagory from '../Catagory/Catagory';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagory></Catagory>
           <BistroAbout></BistroAbout>
        </div>
    );
};

export default Home;