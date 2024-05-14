import React from "react";
import EmailForm from "./EmailForm";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
      {/* footer top */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* logo text */}
        <div className="space-y-4 lg:w-1/3">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-red-500">Aro</span>Link
          </a>
          <p className="text-gray-200">
            Welcome to Arolink and follow us on social media {" "}
          </p>
          {/* social icons */}
          <div className="flex text-white gap-5 ">
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-rose-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />{" "}
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-rose-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />{" "}
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-rose-500 hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />{" "}
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-rose-500 hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-5 h-5" />{" "}
            </a>
          </div>
        </div>
        {/* services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Services</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              UI/UX Design
            </a>
            <a href="/" className="block">
              Web. Development
            </a>
            <a href="/" className="block">
              Digital Marketing
            </a>
            <a href="/" className="block">
              React Development
            </a>
          </div>
        </div>
        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="space-y-3 text-gray-300">
            <p>+919555339324</p>
            <p>dkjha444@gmail.com</p>
            <p>
              Najafgarh,
               New Delhi
            </p>
          </div>
        </div>
        {/* subscribe */}
        <div className="space-y-4 lg:w-96">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
                <input type="email" placeholder="dkjha444@gmail.com" className="newsletter_input" />
                <button className="newsletter_btn">
                    <span>Send</span>
                </button>
                </div>
                <p> <EmailForm /> </p>
            
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300"/>
      <div className="h-8"></div>
      {/* copyright text */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright &copy; 2024 All Rights Reserved. </p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
