"use client";
import React from "react";
import { Carousel, IconButton, Avatar } from "@material-tailwind/react";
import {
  BsArrowRightSquareFill,
  BsArrowLeftSquareFill,
  BsFillStarFill,
} from "react-icons/bs";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Data from "../../Data/Data";
import Image from "next/image";

const RecommendationSlider = () => {
  return (
    <div>
      <Carousel
        className="rounded-xl max-w-[1100px] mx-auto"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute bottom-20 right-24 "
          >
            <BsArrowLeftSquareFill className="text-3xl text-black" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute bottom-20 right-14 "
          >
            <BsArrowRightSquareFill className="text-3xl text-black" />
          </IconButton>
        )}
        navigation={() => null}
      >
        {Data.map((item) => (
          <div
            className="flex flex-wrap gap-3 pb-10 sm:pb-20 justify-center"
            key={item.id}
          >
            <div>
              <div className="pb-8 flex justify-center mx-auto">
                <h1 className="text-blue-400 max-w-[600px] text-2xl md:text-3xl font-medium text-center">
                  Cambiando vidas, una{" "}
                  <span className="text-deep-orange-300">Sonrisa</span> a la vez
                  .
                </h1>
              </div>
              <div className="">
                <BiSolidQuoteAltLeft className="text-3xl text-deep-orange-300 " />
                <p className="text-black text-sm font-medium ml-5 max-w-[400px]">
                  {item.descripcion}
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <div>
                  <Avatar src={item.avatar} alt="avatar" size="lg" />
                </div>
                <div>
                  <p className="font-bold">{item.nombre}</p>
                  <p className="text-gray-600 text-sm">{item.trabajo}</p>
                  <div className="flex gap-1">
                    {[...Array(item.estrellas)].map((_, index) => (
                      <BsFillStarFill
                        key={index}
                        className="text-deep-orange-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Image
              loading="lazy"
              src={item.foto}
              alt="image 1"
              className="h-[400px] w-[450px] rounded-2xl object-cover"
              width={450}
              height={400}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecommendationSlider;