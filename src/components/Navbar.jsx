import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered, FaXmark} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scroll > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navlinks array here
  const navItems =[
    {link:"Home",path:"home"},
    {link:"About",path:"about"},
    {link:"Services",path:"services"},
    {link:"Portfolio",path:"portfolio"},
    {link:"Blog",path:"blogs"},
    {link:"Contact",path:"contact"},
  ]

  
  return (
    <header className="w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in during-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"}`}>
        {/* for large device */}
        <div className="flex  justify-between items-center text-base gap-8">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-red-500">A</span>rino
          </a>

          {/* menu for large device */}
          <ul className="md:flex space-x-12 hidden font-bold">
            {navItems.map(({link,path})=> <Link to={path} key={path} 
            activeClass="active"  spy={path}
           smooth={path}
            className="text-white hover:text-red-600 uppercase block text-base  cursor-pointer">
              {link}</Link> )
            }
          </ul>

          <div className="space-x-12 hidden items-center">
            <button className="bg-transparent  text-white p-2 sm:border sm:rounded-full">
<FaBarsStaggered className="w-4 h-4 hover:text-red-500"/>
            </button>
          </div>
          
          {/* menu btn,visible on mobile screen */}
          <div className="md:hidden">
<button className="text-white focus:outline-none border rounded-full h-10 w-10 flex justify-center items-center hover:text-red-500"
onClick={toggleMenu}>
    {
        isMenuOpen? <FaXmark className="h-6 w-6 "/>:<FaBarsStaggered className="h-6 w-6   "/>
    }

</button>
          </div>
        </div>
        {/* for navItems for small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 transition-all duration-300 ease-in bg-dark ${isMenuOpen? "block fixed top-0 right-0 left-0" :"hidden"}`}>
          
        {navItems.map(({link,path})=> <Link to={path} key={path} 
            activeClass="active"spy={path}
            smooth={path}
            className="text-white   hover:text-red-600 uppercase block text-base  cursor-pointer
            ">{link}</Link> )
            }
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
