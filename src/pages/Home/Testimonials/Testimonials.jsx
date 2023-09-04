
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className='py-20'>
            <SectionTittle heading={'testimonials'} subHeading={'What Our Client Say'}></SectionTittle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
        reviews.map(review=> <SwiperSlide 
        key={review._id}
        >
           <div className='m-24 w-1/2 flex flex-col items-center mx-auto my-16'>
            <Rating 
            style={{width:180}}
            value={review.rating}
            >
            </Rating>
           <FaQuoteLeft className="text-8xl m-4"></FaQuoteLeft>
           <p>{review.details}</p>
            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
           </div>
        </SwiperSlide>)
       }
      </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;