import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';

const Catagory = () => {
    return (
       <section>
        <SectionTittle heading={'ORDER ONLINE'} subHeading={'From 11 AM To 10 PM'}></SectionTittle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className=' text-4xl text-center uppercase -mt-20'>Salads</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className=' text-4xl text-white text-center uppercase -mt-20'>Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className=' text-4xl text-center uppercase -mt-20'>Sups</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className=' text-4xl text-center uppercase -mt-20'>cake</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className=' text-4xl text-center uppercase -mt-20'>Salads</h1>
        </SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Catagory;