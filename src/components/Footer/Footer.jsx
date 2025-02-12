import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full   text-gray-600 px-[10vw] mt-[15vh] ">
      <div className="content border-t-1 flex justify-between items-center gap-[2vw] py-[2vh] sm:flex-col sm:items-center">
      <p className="inline-block">© 2024 Edusity. All rights reserved.</p>
      <p className="inline-block flex-1 text-right cursor-pointer">Terms of Services</p>
      <p className="inline-block cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
