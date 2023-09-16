import { useSwiper } from "swiper/react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const SlideNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="border-2 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4">
      <button
        className="absolute bottom-[21rem] right-4 z-10 p-1 rounded-md"
        onClick={() => swiper.slideNext()}
        type="button"
        role="button"
      >
        <FaArrowCircleRight className={"text-4xl text-blue-400"} />
      </button>
      <button
        className="absolute bottom-[21rem] left-0 z-10 p-1 rounded-md"
        onClick={() => swiper.slidePrev()}
        type="button"
        role="button"
      >
        <FaArrowCircleLeft className="text-4xl text-blue-400" />
      </button>
    </div>
  );
};

export default SlideNavButtons;
