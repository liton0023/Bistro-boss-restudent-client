import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopulerMenu from '../../Home/PopulerMenu/PopulerMenu';
import Cover from '../../shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
          <Helmet>
            <title>BISTRO BOSS | MENU</title>
          </Helmet>
          <Cover img={menuImg} title={'our menu'} ></Cover>
          <PopulerMenu></PopulerMenu>
          <Cover img={menuImg} title={'our menu'} ></Cover>
          <PopulerMenu></PopulerMenu>
          <Cover img={menuImg} title={'our menu'} ></Cover>
          <PopulerMenu></PopulerMenu>
          <Cover img={menuImg} title={'our menu'} ></Cover>
          <PopulerMenu></PopulerMenu>
          <Cover img={menuImg} title={'our menu'} ></Cover>
          <PopulerMenu></PopulerMenu>
        </div>
    );
};

export default Menu;