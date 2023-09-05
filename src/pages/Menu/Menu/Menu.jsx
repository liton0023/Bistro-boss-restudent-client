import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import Cover from '../../shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
          <Helmet>
            <title>BISTRO BOSS | MENU</title>
          </Helmet>
          <Cover img={menuImg} title={'our menu'} ></Cover>
        </div>
    );
};

export default Menu;