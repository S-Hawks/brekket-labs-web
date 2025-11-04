import React from "react";
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
import { NavLink } from "react-router";
import Logo from "../../../assets/Group 427319169.png";

const Sidebar = () => {
  const menuItems = (
    <>
      <label className="text-gray-500 text-sm my-2 font-semibold tracking-wider">
        MENU
      </label>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoHome size={20} /> Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoStatsChart size={20} /> Analytics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoPersonCircle size={20} /> Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoPeople size={20} /> Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/projects"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoDocument size={20} /> Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/billing"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoWallet size={20} /> Billing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/notifications"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoNotifications size={20} /> Notifications
        </NavLink>
      </li>

      <label className="text-gray-500 text-sm mt-6 mb-2 font-semibold tracking-wider">
        GENERAL
      </label>
      <li>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoSettings size={20} /> Settings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-content font-semibold"
                : "hover:bg-base-300"
            }`
          }
        >
          <IoLogOut size={20} /> LogOut
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex-col hidden lg:flex h-full">
      <div className="bg-base-200 lg:w-64 h-full flex flex-col overflow-hidden rounded-xl border border-base-300 shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center justify-center gap-1 mt-6 mb-4 px-4">
          <img src={Logo} alt="Logo" className="w-28 h-auto" />
          <span className="text-xl font-bold text-cyan-700">.Labs</span>
        </div>

        <div className="divider my-2 px-4"></div>
        {/* Menu Section */}
        <div className="flex-1 overflow-y-auto px-3">
          <ul className="menu text-base font-medium">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
