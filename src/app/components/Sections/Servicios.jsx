"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { CldImage } from "next-cloudinary";

const Data = [
  {
    title: "Consultas Virtuales",
    description:
      "Excepteur est non dolor occaecat occaecat laboris eiusmod ut veniam incididunt occaecat ullamco culpa consequat. Duis aliquip do exercitation sit commodo. Irure labore non officia sunt ea. Duis officia ut id ea.",
    image: "https://res.cloudinary.com/dk0jth6fd/image/upload/v1694829067/doctor1_rwdnmd.jpg",
  },
  {
    title: "Limpieza Dental",
    description:
      "Excepteur est non dolor occaecat occaecat laboris eiusmod ut veniam incididunt occaecat ullamco culpa consequat. Duis aliquip do exercitation sit commodo. Irure labore non officia sunt ea. Duis officia ut id ea.",
    image: "https://res.cloudinary.com/dk0jth6fd/image/upload/v1694829060/doctor2_pwredz.jpg",
  },
  {
    title: "Blanqueamiento",
    description:
      "Excepteur est non dolor occaecat occaecat laboris eiusmod ut veniam incididunt occaecat ullamco culpa consequat. Duis aliquip do exercitation sit commodo. Irure labore non officia sunt ea. Duis officia ut id ea.",
    image: "https://res.cloudinary.com/dk0jth6fd/image/upload/v1694829060/doctor3_htp8wx.jpg",
  },
  {
    title: "Ortodoncia",
    description:
      "Excepteur est non dolor occaecat occaecat laboris eiusmod ut veniam incididunt occaecat ullamco culpa consequat. Duis aliquip do exercitation sit commodo. Irure labore non officia sunt ea. Duis officia ut id ea.",
    image: "https://res.cloudinary.com/dk0jth6fd/image/upload/v1694829061/doctor5_zn0wot.jpg",
  },
];

const Servicios = () => {
  return (
    <div className="px-3 lg:px-10 mt-20 pb-10">
      <div>
        <h1 className="text-4xl">
          {" "}
          <span className="text-deep-orange-300">Nuestros</span> Servicios
        </h1>
      </div>
      <div className="mt-8 grid justify-items-center mx-auto gap-5 sm:gap-1 md:gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Data.map((item, index) => (
          <div key={index} className="">
            <div className=" max-w-[408px] group">
              <div className="p-4 bg-deep-orange-50 border border-orange-200 rounded-3xl shadow-xl group-hover:border-none  group-hover:bg-blue-600 duration-200">
                <h1 className="text-3xl group-hover:text-white duration-200 font-bold">
                  {item.title}
                </h1>
                <p className="text-sm font-semibold group-hover:text-gray-200 text-gray-800 duration-200 mt-2">
                  {item.description}
                </p>
                <div className="relative">
                  <CldImage
                    width="408"
                    height="272"
                    src={item.image}
                    preserveTransformations
                    alt={item.title}
                    format="webp"
                  />
                  <div>
                    <div className="absolute bottom-0 right-0 bg-deep-orange-50 group-hover:bg-blue-600 duration-200 p-2 rounded-tl-2xl">
                      <Link href="https://www.google.com/">
                        <BsBoxArrowInUpRight className="text-3xl text-blue-800 group-hover:text-gray-300 duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
