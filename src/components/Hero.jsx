import { Link } from "react-scroll";
import Navbar from "./Navbar";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="banner cs-style" id="home">
      {/* css shapes */}
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>

      {/* banner content */}
      <div className="px-4 lg:px-24">
        <h1
          className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold
          lg:leading-snug sm:leading-snug leading-snug"
        >
          Creativity In Our Blood Line
        </h1>

        {/* banner button or text */}
        <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
            <div>
          <a
            href=""
            className="inline-flex items-center gap-2 font-semibold hover:text-red-500
            transition-all duration-300 ease-in"
          >
            <span>Get a Quote</span>
            <BsArrowRight />
          </a>
          </div>
       
        <div className="md:w-1/2">
          <p>
            we deliver best problem solving solution our client and provide
            finest dinishing product in present and upcoming future.
          </p>
        </div>
        </div>
      </div>
      {/* scroll arrow to service section */}
      <Link to="services" smooth={true} className='cs-down_btn md:mt-20 mt-s'>.</Link>
    </div>
  );
};
export default Hero;
