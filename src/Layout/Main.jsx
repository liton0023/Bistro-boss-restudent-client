import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/Footer/NavBar/NavBar';

const Main = () => {
    const location=useLocation();
    const loginPage=location.pathname.includes('login');
    return (
        <div>
           { loginPage ||  <NavBar></NavBar>}
            <Outlet></Outlet>
           { loginPage || <Footer></Footer>}
        </div>
    );
};

export default Main;