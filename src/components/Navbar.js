import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed-w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="" style={{ width: "50px" }} />
      </div>
      {/* Menu */}

      <ul className="hidden  md:flex">
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>{" "}
        </li>
      </ul>

      {/* Hamburger */}

      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu   */}
      <ul
        className={
          !nav
            ? "hidden"
            : "  absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-content-center items-center"
        }
      >
        <li className="py-6 text-4xl"> <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link> </li>
        <li className="py-6 text-4xl">  
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link> </li>
        <li className="py-6 text-4xl"> <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link> </li>
        <li className="py-6 text-4xl"> <Link to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link> </li>
        <li className="py-6 text-4xl"> <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link> </li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/osamamalik346/"
              className="flex justify-between items-center text-gray-200  w-full "
            >
              {" "}
              Linkdin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/usmamalik345"
              className="flex justify-between items-center text-gray-200  w-full "
            >
              {" "}
              Github <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="usmamalik346@gmail.com"
              className="flex justify-between items-center text-gray-200  w-full "
            >
              {" "}
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1yaQLj1_XveU0lUMs94fzgGfL9wuom9xv/view?usp=sharing"
              className="flex justify-between items-center text-gray-200  w-full "
            >
              {" "}
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
