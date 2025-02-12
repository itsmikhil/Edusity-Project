import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import NavOptions from "./NavOptions";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);
  let data = [
    { option: "Home", name: "landing-page", offset: 0 },
    { option: "Program", name: "program", offset: -50 },
    { option: "About us", name: "about", offset: -95 },
    { option: "Campus", name: "testimonials", offset: -120 },
    { option: "Testimonials", name: "reviews", offset: -100 },
  ];

  const [sideNav, setsideNav] = useState(false)
  let sideNavPosition=()=>{
    setsideNav(sideNav?false:true);
  }

  return (
    <div
      className={`navbar ${
        sticky ? "bg-blue-800" : ""
      } transition-all ease-out duration-[0.5s]   w-full flex justify-between items-center px-[9.5vw] py-[1.5vh] pr-[12vw] fixed top-0 z-[999] `}
    >
      <img className="w-[12vw] h-[5.5vh] md:w-[150px] md:h-[40px]" src={logo} alt="" />
      <div className={`nav-options flex flex-1 gap-[2.75vw]  justify-end mx-[2vw] items-center  md:fixed md:top-0 md:-right-[2vw] ${sideNav?"":"md:-right-[50%] md:pointer-events-none"} md:transition-all md:ease-out md:duration-[0.5s] md:items-start md:bg-[#193CB8] md:flex-col text-[5vw] md:h-[100vh] md:justify-start md:py-[20vh] md:px-[1vh] md:gap-[3vh] md:w-[40%] `}>
        {data.map((el, idx) => {
          return (
            <Link
              to={el.name}
              smooth={true}
              offset={el.offset}
              duration={500}
              key={idx}
            >
              <NavOptions el={el.option} idx={idx} key={idx} />
            </Link>
          );
        })}
        <Link to="contact" smooth={true} offset={-200} duration={500} className="flex items-center">
          <button className="border-1 border-white bg-white text-[#201439] rounded-full px-[1.75vw] py-[1.5vh] text-[1vw] md:text-[4vw] md:px-[3.75vw] md:py-[1vh] cursor-pointer ">
            Contact Us
          </button>
        </Link>
      </div>
      {sideNav?<RxCross1 onClick={sideNavPosition} className="text-white text-[4vw] z-[1000] hidden md:inline-block md:transition-all md:duration-[0.8s] md:ease-out md:absolute md:right-[5vw] cursor-pointer " />:<GiHamburgerMenu onClick={sideNavPosition} className="text-white text-[4vw] z-[1000] hidden md:inline-block md:transition-all md:ease-out md:duration-[0.8s] cursor-pointer  " />}
    </div>
  );
};

export default NavBar;
