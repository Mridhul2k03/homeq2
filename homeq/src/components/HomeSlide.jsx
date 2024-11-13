import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeSlide = () => {
  return (

    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src="./slide1.jpg" className='w-full' alt="" /></SwiperSlide>
      <SwiperSlide><img src="./slide2.jpg" className='w-full' alt="" /></SwiperSlide>
      <SwiperSlide><img src="./slide3.jpg" className='w-full' alt="" /></SwiperSlide>
      <SwiperSlide><img src="./slide4.jpg" className='w-full' alt="" /></SwiperSlide>
    </Swiper>
  </>

  )
}
export default HomeSlide
