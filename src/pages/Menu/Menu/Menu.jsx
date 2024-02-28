
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Hooks/useMenu';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessartImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import suopImg from '../../../assets/menu/soup-bg.jpg';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import Cover from '../../shared/Cover/Cover';
import MenuCatagory from '../MenuCatagory/MenuCatagory';

const Menu = () => {
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category==='offered');
    const soup=menu.filter(item=>item.category==='soup');
    const pizza=menu.filter(item=>item.category==='pizza');
    const drinks=menu.filter(item=>item.category==='drinks');
    const salad=menu.filter(item=>item.category==='salad');
    const dessert=menu.filter(item=>item.category==='dessert');

    return (
        <div>
          <Helmet>
            <title>BISTRO BOSS | MENU</title>
          </Helmet>
          {/* main part */}
          <Cover img={menuImg} title={'our menu'} ></Cover>
          {/* offer section */}
          <SectionTittle subHeading={'Dont Miss'} heading={'todays Offer'}></SectionTittle>
          <MenuCatagory items={offered}></MenuCatagory>
          {/* dessert section */}
          <MenuCatagory items={dessert} coverImg={dessartImg} title={'Desserts'}></MenuCatagory>
          {/* pizza section */}
          <MenuCatagory items={pizza} coverImg={pizzaImg} title={'Pizza'}></MenuCatagory>
          {/* salads section */}
          <MenuCatagory items={salad} coverImg={saladImg} title={'Salads'}></MenuCatagory>
          {/* suops section */}
          <MenuCatagory items={soup} coverImg={suopImg} title={'soups'}></MenuCatagory>
          {/* derinks section */}
          <MenuCatagory items={drinks} coverImg={menuImg} title={'Drinks'}></MenuCatagory>
        </div>
    );
};

export default Menu;