import React from "react";


const Title = ({ heading, subheading }) => {
  return (
    <div className="title flex flex-col justify-center items-center  mt-[5vh]">
      <h3 className="text-[#212EA0] uppercase text-[1vw] font-semibold sm:text-[4vw]">{heading}</h3>
      <h1 className="text-[#201439] capitalize font-bold text-[2vw] sm:text-[8vw]">{subheading}</h1>
    </div>
  );
};

export default Title;
