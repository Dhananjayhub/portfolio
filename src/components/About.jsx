import React from "react";

const About = () => {
  return (
    <div
      className="text-white md:-mt-[100px] -mt-10  bg-gradient-to-tr from-[#161666] to-[#080808] 
    lg:mx24 md:py20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50  flex flex-col md:flex-row justify-between md:items-center gap-12  relative"
    >
      <div className="bg-[url(./assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute top-0 left-0 opacity-75 ">
     
      </div>
      {/* left side text */}
      <div className="md:w-2/5 " id="about" >
        <h2 className="text-5xl font-bold mb-5">Our fun fact</h2>
        <p className="text-gray-300">
          sed ut prerspiciatis unde omnis iste natus error valutatem accusantuim
          doloremque laudantium, totam rem aperiam,eaque ipsa quaw ab illo
          iventore veritatis.
        </p>
      </div>
      {/* right side text */}
      <div className="md:w-3/5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">
              40k
            </h4>
            <div>
              <span className="text-red-500 font-bold text-lg">+</span>
              <p className="mb-2 text=sm  lead text-gray-300">Global Happy Clients</p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">
              40k
            </h4>
            <div>
              <span className="text-red-500 font-bold text-lg">+</span>
              <p className="mb-2 text=sm  lead text-gray-300">Global Happy Clients</p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">
              40k
            </h4>
            <div>
              <span className="text-red-500 font-bold text-lg">+</span>
              <p className="mb-2 text=sm  lead text-gray-300">Global Happy Clients</p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">
              40k
            </h4>
            <div>
              <span className="text-red-500 font-bold text-lg">+</span>
              <p className="mb-2 text=sm  lead text-gray-300">Global Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
