import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./heroslider.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const imgData = [
  {
    img: "https://www.shareindia.com/wp-content/uploads/2022/10/Trading-Psychology-%E2%80%93-Mastering-Emotions-Biases-and-Common-Traps.webp",
  },

  {
    img: "https://stratzy.in/blog/content/images/2024/07/Algo-Trading-Meaning-Basics-and-Example.webp",
  },
  {
    img: "https://img.freepik.com/free-photo/stock-trading-workplace-background_1409-5545.jpg",
  },
];

export default function HeroSlider1() {
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imgData.map((data, index) => (
          <>
            <SwiperSlide key={index}>
              <img src={data.img} alt="trading-image" />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}
