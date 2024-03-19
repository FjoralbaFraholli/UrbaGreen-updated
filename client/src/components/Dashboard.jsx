
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { INFO } from '../data/info.js';
import InfoCard from './InfoCard';

export default function Dashboard({ user }) {
  return (
    <div className='w-full h-[1400px]'>
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className='object-contain h-[450px] w-full mx-auto'
            src={`https://cdn.shopify.com/s/files/1/0526/1914/9488/files/eco_friendly.png?v=1659684379`} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-contain h-[450px] w-full mx-auto'
            src={`https://th.bing.com/th/id/R.ac1a82b628f43858f83f63a7f2e95966?rik=f%2f7EqPcUORGrRw&pid=ImgRaw&r=0`} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='object-contain h-[450px] w-full mx-auto'
            src={`https://static.vecteezy.com/system/resources/previews/038/007/996/non_2x/ai-generated-iguana-high-quality-image-free-photo.jpg`} />
        </SwiperSlide>
      </Swiper>

      <div className="bg-green-200 text-green-800 p-8 rounded-lg shadow-md mt-5">
        <h1 className="text-xl font-bold mb-4 text-center">Welcome to UrbaGreen! <span> Your go-to website for everything you need to know about how we can take small steps to make a big difference!</span></h1>
        <p className="text-black text-center mb-4">We try our best to raise awareness and spread the word on being as conscious we can about the issues present in our environment and society.</p>
        <p className="text-black text-center">Saving our planet is not only necessary, but it can also be fun!</p>
      </div>

      <div
        className='flex flex-row my-12'>
        {INFO.map((val, key) => (
          <InfoCard info={val} key={key} />
        ))}
      </div>

      <div>
        <iframe
          className='mx-auto rounded-lg shadow-lg '
          width="500" height="275"
          src="https://www.youtube.com/embed/XAi3VTSdTxU?si=LzRzWji3F2nQWS-w">
        </iframe>
      </div>
    </div>
  );

}


