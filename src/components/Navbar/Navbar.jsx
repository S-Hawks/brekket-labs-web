import React, { useState } from "react";
import logo from "../../assets/Group 427319169.png";
import { GoArrowRight } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  MdOutlineMiscellaneousServices,
  MdMiscellaneousServices,
} from "react-icons/md";
import { BsBox, BsBoxFill } from "react-icons/bs";
import { HiOutlineNewspaper, HiNewspaper } from "react-icons/hi";
import {
  IoInformationCircleOutline,
  IoInformationCircle,
} from "react-icons/io5";
import { MdOutlineContactMail, MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const list = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <AiFillHome size={20} className="animate-bounce" />
              ) : (
                <AiOutlineHome size={20} />
              )}
              Home
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <MdMiscellaneousServices size={20} className="animate-bounce" />
              ) : (
                <MdOutlineMiscellaneousServices size={20} />
              )}
              Services
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <BsBoxFill size={18} className="animate-bounce" />
              ) : (
                <BsBox size={18} />
              )}
              Products
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <HiNewspaper size={20} className="animate-bounce" />
              ) : (
                <HiOutlineNewspaper size={20} />
              )}
              Blogs
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <IoInformationCircle size={20} className="animate-bounce" />
              ) : (
                <IoInformationCircleOutline size={20} />
              )}
              About Us
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          {({ isActive }) => (
            <span className="flex items-center gap-1">
              {isActive ? (
                <MdContactMail size={20} className="animate-bounce" />
              ) : (
                <MdOutlineContactMail size={20} />
              )}
              Contact
            </span>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-linear-to-r from-[#fdffc4]/60 via-[#cff3d5]/60 to-[#66d8fe]/60 backdrop-blur-lg sticky top-0 z-50 px-5 md:px-10 xl:px-40 py-4 shadow-sm">
      <div className="navbar-start">
        <NavLink to="/">
          <img
            className="w-32 h-6 md:w-40 md:h-7 xl:w-48 xl:h-8 cursor-pointer hover:opacity-90 transition-opacity"
            src={logo}
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="navbar-end gap-3">
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium gap-1">
            {list}
          </ul>
        </div>
        <button className="btn text-base shadow-md rounded-full bg-black text-white border-0 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold hidden xl:flex px-6">
          Get a Custom Quote <GoArrowRight size={20} />
        </button>
        <div className="xl:hidden">
          <div
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross1 size={26} strokeWidth={2} />
            ) : (
              <TiThMenu size={28} />
            )}
          </div>
          <ul
            className={`menu absolute bg-white right-5 top-20 rounded-2xl w-11/12 max-w-md p-4 shadow-xl border border-gray-100 text-base font-medium transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
