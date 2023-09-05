import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../shared/Cover/Cover';
import OrderTab from '../OrderTab';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category==='offered');
    const soup=menu.filter(item=>item.category==='soup');
    const pizza=menu.filter(item=>item.category==='pizza');
    const drinks=menu.filter(item=>item.category==='drinks');
    const salad=menu.filter(item=>item.category==='salad');
    const dessert=menu.filter(item=>item.category==='dessert');
    return (
        <div>
           <Cover img={orderImg} title={'order now'}></Cover>
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className=' flex place-content-center my-12'>
        <Tab>PIZZA</Tab>
        <Tab>SALAD</Tab>
        <Tab>SOUP</Tab>
        <Tab>DESSART</Tab>
        <Tab>DERINKS</Tab>
      </TabList>
      <TabPanel>
       <OrderTab item={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={salad}></OrderTab>
      </TabPanel>
      <TabPanel>
     <OrderTab item={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={dessert}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab item={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;