
import useMenu from '../../../Hooks/useMenu';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import MenuItems from '../../shared/MenuItems/MenuItems';

const PopulerMenu = () => {
    const[menu]=useMenu();
    const populer=menu.filter(item=>item.category==='popular');
    return (
        <section className='mb-12 w-9/12 mx-auto'>
            <SectionTittle heading={'From Our Menu'} subHeading={'Populer Items'}></SectionTittle>
           <div className='grid md:grid-cols-2 gap-8'>
           {
                populer.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
            }
           </div>
        </section>
    );
};

export default PopulerMenu;