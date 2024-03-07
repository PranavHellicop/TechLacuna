import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { testimonials } from '../../data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../../styles.css"



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <Swiper
      
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}

        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          360:{slidesPerView:1},
          640: { slidesPerView: 3},
        }}
        
         
          
      >
        {testimonials.map((item) => (

          <SwiperSlide className='lg:h-[27rem] h-[22rem]'>
            <BiSolidQuoteAltLeft className='text-white font-extrabold lg:text-5xl text-sm' />
            <p className='text-wrap text-white lg:text-[0.8rem] text-[0.8rem] italic font-normal'>{item.content}</p>
            <div className='flex text-center w-fit lg:h-1/6 h-[14%] items-center justify-center lg:space-x-2 space-x-0 p-1'>
              <img src={item.image} alt="image"/>
              <div className='flex flex-col justify-center items-center p-1 ml-[0.5rem] '>
                <p className='text-white text-nowrap name lg:text-[0.8rem] text-[0.5rem]'>{item.name}</p>
                <p className='text-white font-extrabold text-nowrap lg:text-[0.8rem] text-[0.8rem] '>{item.company.toUpperCase()}</p>

              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testimonial