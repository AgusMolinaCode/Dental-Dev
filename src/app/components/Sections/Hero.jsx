import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const outfit = Outfit({ subsets: ["latin"] });

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        id="reservas"
        className="mt-8 px-3 grid 2xl:flex justify-center lg:gap-28 "
      >
        <div className="">
          <div className="max-w-[21rem]">
            <div className={outfit.className}>
              <h2 className="text-md sm:text-2xl">
                Un cuidado bucal adecuado, muestra resultados brillantes.
              </h2>
            </div>
          </div>
          <div className="pt-16 ">
            <div className="relative">
              <Image
                src="/forma1.png"
                alt="Forma1"
                width={30}
                height={30}
                className="absolute top-[-48px] sm:left-[-21.4px] sm:rotate-[-97deg] rotate-[-85deg]"
              />
              <h1 className="font-bold text-[4rem] sm:text-[7rem] 2xl:text-[9rem] leading-4">
                SONRISAS
              </h1>
            </div>
            <div className="flex items-start pt-6 ">
              <span className="font-bold text-[3rem] sm:text-[6rem]">
                SANAS
              </span>
              <Image
                src="/forma1.png"
                alt="Forma1"
                width={30}
                height={30}
                className="sm:pt-8"
              />
            </div>

            <div className="flex gap-2">
              <Link
                href="#reservas"
                className="bg-blue-400 hover:bg-blue-500 duration-200 text-white font-bold text-[1.5rem] px-4 py-2 md:px-6 md:py-3 rounded-2xl "
              >
                Reservar
              </Link>
              <Link
                href="#contact"
                className="bg-blue-400 hover:bg-blue-500 duration-200 text-white font-bold text-[1.5rem] px-4 py-2 md:px-6 md:py-3 rounded-2xl "
              >
                Contactar
              </Link>
            </div>
            <div className={outfit.className}>
              <p className="max-w-[34rem] pt-8 text-gray-500">
                * Imagina si tu diente pudiera ir a un spa. Bueno, nuestra app
                de cuidado dental es la forma más cercana de hacerlo sentir
                mimado. Reserva citas con especialistas en un abrir y cerrar de
                ojos, y trata a tus dientes con el cariño que se merecen.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            loading="lazy"
            src="/smile6.webp"
            alt="Person Smile"
            width={800}
            height={800}
            className="rounded-2xl mt-5 sm:mt-0 md:rounded-[3rem] w-[380px] sm:w-[800px] mx-auto flex justify-center items-center"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
