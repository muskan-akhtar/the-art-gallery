import React from "react";
const Header = () => {
  return (
    <div className="">
      <h1 className="font-bold font-serif text-left bg-gradient-to-r from-teal-400 hover:from-pink-500 hover:to-orange-500 pt-2 pl-2 pb-2 sm:text-3xl md:text-4xl lg:text-5xl mt-5 mb-5 mr-5 italic hover:not-italic" data-aos="fade-left" data-aos-easing="ease-in">
        The Art Gallery:
      </h1>
      <h1 className="font-bold font-serif text-right bg-gradient-to-r from-red-400 hover:from-pink-500 hover:to-orange-500 pb-2 pr-4 pt-2 sm:text-3xl md:text-4xl lg:text-5xl italic hover:not-italic mb-5 ml-5 " data-aos="fade-right" data-aos-easing="ease-in">
        Discover the World of Art
      </h1>
    </div>
  );
};
export default Header;
