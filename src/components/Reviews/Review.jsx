import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = ({ el, idx }) => {
  return (
    <div className=" px-[3vw] py-[2vh] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[32vh] sm:h-[40vh] flex flex-col justify-evenly  ">
      <div className="top flex items-center gap-[1vw] sm:flex-col sm:items-start">
        <img
          src={el.image}
          className="sm:w-[12.33vw] sm:h-[12.33vw] w-[3.33vw] h-[7.33vh] rounded-full mb-2 border-4 border-[#212EA0]"
        />
        <div className="details flex flex-col sm:flex-col">
          <h2 className="text-lg font-semibold text-[1vw] text-[#212EA0] sm:text-[3.5vw]">{el.name}</h2>
          <h4 className="text-[0.85vw] text-gray-600 sm:text-[2.5vw]">Edusity,USA</h4>
        </div>
      </div>
      <p className="text-sm text-gray-600 sm:text-[2.5vw] ">{el.thoughts}</p>
    </div>
  );
};

export default Review;
