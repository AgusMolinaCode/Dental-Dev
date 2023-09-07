"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundBlogCard from "./BackgroundBlogCard";
import Doctors from "@/app/Data/Doctors";
import SlideNavButtons from "./SlideNavButtons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Scrollbar, A11y, Keyboard } from "swiper/modules";

export default function SwiperProfesionales() {
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Keyboard]}
        slidesPerView={1}
        spaceBetween={10}
        
        keyboard={true}
        className="mySwiper"
        style={{
          margin: "0 auto",
          padding: "0 1rem",
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {Doctors.map((doctor) => (
          <SwiperSlide key={doctor.id} className="text-4xl">
            <BackgroundBlogCard doctor={doctor} />
          </SwiperSlide>
        ))}
        <SlideNavButtons />
      </Swiper>
    </>
  );
}
