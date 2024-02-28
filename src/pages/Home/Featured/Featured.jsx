import { useEffect, useState } from 'react';
import img from '../../../assets/home/featured.jpg';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import '../Featured/featured.css';

const Featured = () => {
    const [currentDate, setCurrentDate]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCurrentDate(new Date());
        },1000);
        return ()=> clearInterval(intervalId);
    },[]);
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      const monthName = monthNames[currentDate.getMonth()];
      const formattedDate = `${monthName} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    return (
        <div className='featured-item pt-12 my-20 bg-fixed'>
            <SectionTittle heading={'from our menu'} subHeading={'Chack It Out'}></SectionTittle>
            <div className='md:flex bg-slate-500 bg-opacity-50 justify-center items-center py-8 pt-12 px-16 text-white'>
              <div>  <img src={img} alt="" /></div>
                <div className='md:ml-10'> 
                    <p>{formattedDate}</p>
                    <p className='uppercase'>Where can get some?</p>
                    <p className='uppercase'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad incidunt consequuntur. Vitae exercitationem aut alias ex dolorem, ipsum perspiciatis enim autem adipisci magnam officia, odio dolorum velit quas ab eaque temporibus totam impedit sequi eum! Laudantium id quaerat quae ea quo, accusamus incidunt et mollitia voluptate ratione expedita fugit.</p>
                    <button className='btn btn-outline uppercase border-0 border-b-4 mt-4'>order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;