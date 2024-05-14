import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "./BlogCards";

const Blogs = () => {
  return (
    <div className="text-white lg:px-24 px-4">
      {/* blog top */}
      <div>
        <h2 className="text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pb-20">
          Our agile process is ability to adapt and respond to change .Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        {/* video player */}
        <a href="/">
          <div
            className="bg-[url('assets/video_bg.jpeg')] bg-cover bg-no-repeat  cursor-pointer cs-video_block cs-bg
          cs-style1 cs-video_open"
          >
            <span className="cs-player_btn cs-accent_color">
              <span></span>
            </span>
          </div>
        </a>
      </div>
      <div className="h-28"></div>
      {/* main blog */}
      <div className="relative" id="blogs">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          {/* content */}
          <div className="lg:w-1/3 space-y-5 z-30">
            <h4 className="text-gray-200 font-semibold text-2xl">Our Blog</h4>
            <h2 className="text-5xl font-bold mb-5 leading-snug text-white">
              Explore recent publication
            </h2>
            <a
              href=""
              className="inline-flex items-center gap-2 font-semibold hover:text-red-500
            transition-all duration-300 ease-in"
            >
              <span>View more</span>
              <BsArrowRight />
            </a>
          </div>
          {/* cards */}
          <div className="lg:w-2/3 my-8">
            {/* lines */}
            <div className="flex mb-10">
              <div className="h-8 w-1/3 rounded-s-2xl bg-white"></div>
              <div className="h-8 w-1/2  bg-blue-500"></div>
              <div className="h-8 w-1/3  bg-rose-500"></div>
              <div className="h-8 w-1/2 rounded-e-2xl bg-yellow-500"></div>
            </div>
            {/* blog cards */}
            <BlogCards />

            {/* button */}
            <div className="w-full mx-auto relative">
               <button className="lg:absolute right-0 mt-8 py-2 px-4 bg-white text-black rounded
                hover:bg-rose-500 hover:text-white transition-all duration-300 hover:translate-y-3">Read More</button>
            </div>
          </div>
        </div>
          {/* shapes */}
      <div className="hidden lg:block">
        <div className="cs-shape_4"></div>
        <div className="cs-shape_4"></div>
      </div>
      <div className="lg:h-60 h-8"></div>
      </div>
    
    </div>
  );
};

export default Blogs;
