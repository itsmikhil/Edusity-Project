import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import Review from "./Review";
import Title from "../Title";

const Reviews = () => {
  const [gap, setGap] = useState(83); // Default for large screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGap(33);
      } else {
        setGap(83); // Reset for larger screens
      }
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const reviewData = [
    {
      image: user1,
      name: "Sophia Bennett",
      thoughts:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user2,
      name: "Michael Carter",
      thoughts:
        "Studying at Edusity transformed my learning experience. The engaging faculty, modern resources, and student-focused environment have made a lasting impact on my career path.",
    },
    {
      image: user3,
      name: "Emily Richardson",
      thoughts:
        "Edusity provided me with an incredible learning journey. The interactive sessions, skilled professors, and practical approach helped me develop the skills I needed for my future.",
    },
    {
      image: user4,
      name: "Daniel Thompson",
      thoughts:
        "My time at Edusity was truly rewarding. The challenging coursework, encouraging mentors, and hands-on projects prepared me to excel in my professional field with confidence.",
    },
  ];

  return (
    <div className="reviews relative w-full mb-[20vh]">
      <Title heading="Testimonials" subheading="What Students Say" />

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-6 top-1/2 transform translate-y-1/2 translate-x-[7vw] sm:translate-x-[1vw] sm:translate-y-[4vh] z-10 cursor-pointer p-4 rounded-full bg-[#08003ab3] text-white shadow-lg hover:bg-[#08003a] transition-all duration-300">
        ❮
      </div>
      <div className="custom-next absolute right-6 top-1/2 transform translate-y-1/2 -translate-x-[7vw] sm:-translate-x-[1vw] sm:translate-y-[4vh] z-10 cursor-pointer p-4 rounded-full bg-[#08003ab3] text-white shadow-lg hover:bg-[#08003a] transition-all duration-300">
        ❯
      </div>

      {/* Swiper Component */}
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={gap}
        className="mySwiper text-black w-[75vw] mx-auto !px-[5vw] !py-[1.5vh] mt-[10vh]"
      >
        {reviewData.map((el, idx) => (
          <SwiperSlide key={idx}>
            <Review el={el} idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
