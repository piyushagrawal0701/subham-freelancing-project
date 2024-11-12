import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./heroslider.css";

import bgImg1 from "../../assets/Images/Hero-Section/bg.jpeg"
import bgImg2 from "../../assets/Images/Hero-Section/bg1.jpeg"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const imgData = [
  {
    img: bgImg1,
  },
  {
    img: bgImg2
  },
  {
    img: "https://www.shareindia.com/wp-content/uploads/2022/10/Trading-Psychology-%E2%80%93-Mastering-Emotions-Biases-and-Common-Traps.webp",
  },
  {
    img: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    img: "https://images.pexels.com/photos/5833274/pexels-photo-5833274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function HeroSlider1({ setActiveSlide }) {
  return (
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
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      className="mySwiper"
    >
      {imgData.map((data, index) => (
        <SwiperSlide key={index}>
          <img src={data.img} alt="trading-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
