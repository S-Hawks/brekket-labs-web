import React, { use, useState } from "react";
import { IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import {
  IoHome,
  IoSettings,
  IoStatsChart,
  IoPeople,
  IoDocument,
  IoNotifications,
  IoWallet,
  IoPersonCircle,
  IoLogOut,
} from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../../provider/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        alert("Failed to logout");
      });
  };

  const mobileMenu = (
    <>
      <label className="text-gray-500 text-sm mt-2">MENU</label>
      <li>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoHome /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="analytics"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoStatsChart /> Analytics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoPersonCircle /> Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoPeople /> Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoDocument /> Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="billing"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoWallet /> Billing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="notifications"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoNotifications /> Notifications
        </NavLink>
      </li>
      <label className="text-gray-500 text-sm mt-6">GENERAL</label>
      <li>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive ? "bg-primary text-primary-content font-semibold" : ""
          }
        >
          <IoSettings /> Settings
        </NavLink>
      </li>
      <li>
        <a onClick={handleLogout} className="cursor-pointer">
          <IoLogOut /> Logout
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 px-4 rounded-xl border border-base-300 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <div
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <RxCross1 size={24} strokeWidth={2} />
            ) : (
              <IoMenu size={28} />
            )}
          </div>
          <ul
            className={`menu absolute bg-base-100 left-5 top-20 rounded-2xl w-11/12 max-w-md p-4 shadow-xl border border-base-300 text-base font-medium transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 translate-y-0 visible z-50"
                : "opacity-0 -translate-y-2 invisible"
            }`}
          >
            {mobileMenu}
          </ul>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="input w-full min-w-xs rounded-xl hidden lg:block"
        />
      </div>

      <div className="navbar-end gap-3">
        {/* Notification Button */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator border-10 border-white bg-white hidden lg:block rounded-full">
            <IoNotificationsOutline className="h-6 w-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* User Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-full rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow border border-base-300"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout} className="cursor-pointer">
                <IoLogOut /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
