import Image from "next/image";
import React from "react";

const LOGOS = [
  <Image key="logo1" src="/colgate.png" alt="logo1" width={200} height={200} />,
  <Image key="logo2" src="/listerine.png" alt="logo2" width={200} height={200} />,
  <Image key="logo3" src="/oral-b2.png" alt="logo3" width={200} height={200} />,
  <Image key="logo4" src="/sensodyne.png" alt="logo4" width={200} height={200} />,
  <Image key="logo5" src="/strauman.png" alt="logo5" width={200} height={200} />,
  <Image key="logo6" src="/osstem.png" alt="logo6" width={200} height={200} />,
  <Image key="logo7" src="/Parodontax.png" alt="logo7" width={200} height={200} />,
  <Image key="logo8" src="/Nobel_Biocare.png" alt="logo8" width={200} height={200} />,
  <Image key="logo9" src="/colgate.png" alt="logo9" width={200} height={200} />,
  <Image key="logo10" src="/listerine.png" alt="logo10" width={200} height={200} />,
  <Image key="logo11" src="/oral-b2.png" alt="logo11" width={200} height={200} />,
  <Image key="logo12" src="/sensodyne.png" alt="logo12" width={200} height={200} />,
  <Image key="logo13" src="/strauman.png" alt="logo13" width={200} height={200} />,
];

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto h-[60px] max-w-[1190px] bg-transparent  overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full   before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full  after:-scale-x-100  before:md:w-[200px] before:w-[80px] after:md:w-[200px] after:w-[80px] after:content-['']">
    <div className="animate-infinite-slider flex gap-14 w-[calc(250px*10)]">
        {LOGOS.map((logo) => (
            <div
                className="slide flex w-full h-[60px] items-center justify-center"
                key={logo.key}
            >
                {logo}
            </div>
        ))}
      </div>
    </div>
  );
};