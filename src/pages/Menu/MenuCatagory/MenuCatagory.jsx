import React from 'react';
import Cover from '../../shared/Cover/Cover';
import MenuItems from '../../shared/MenuItems/MenuItems';

const MenuCatagory = ({items,title,coverImg}) => {
  
    return (
       <div className='mt-24'> 
          {title && <Cover img={coverImg} title={title} ></Cover>}
         <section className='mb-12 my-8 w-9/12 mx-auto'>
       <div className='grid md:grid-cols-2 gap-8 mt-16'>
       {
            items.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
        }
       </div>
    </section>
       </div>
    );
};

export default MenuCatagory;