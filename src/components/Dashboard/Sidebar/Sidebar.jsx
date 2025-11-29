import React, { use } from "react";
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
import { MdReviews } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";
import Logo from "../../../assets/Group 427319169.png";
import { AuthContext } from "../../../provider/AuthContext";

const Sidebar = () => {
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

  const menuItems = (
    <>
      <label className="text-gray-500 text-sm my-2 font-semibold tracking-wider">
        MENU
      </label>
      <li>
        <NavLink
          to="/dashboard"
          end
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
          to="analytics"
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
          to="profile"
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
          to="users"
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
        <details>
          {" "}
          <summary>
            {" "}
            <IoDocument size={20} /> Products
          </summary>
          <ul className="p-2">
            <li>
              <NavLink
                to="products/all"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-content font-semibold"
                      : "hover:bg-base-300"
                  }`
                }
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="products/add"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-content font-semibold"
                      : "hover:bg-base-300"
                  }`
                }
              >
                Add Products
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          to="billing"
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
          to="notifications"
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
      <li>
        <details>
          <summary className="flex items-center gap-3">
            <MdReviews size={20} /> Reviews
          </summary>
          <ul className="p-2">
            <li>
              <NavLink
                to="reviews/all"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-content font-semibold"
                      : "hover:bg-base-300"
                  }`
                }
              >
                All Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews/add"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-content font-semibold"
                      : "hover:bg-base-300"
                  }`
                }
              >
                Add Reviews
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      <label className="text-gray-500 text-sm mt-6 mb-2 font-semibold tracking-wider">
        GENERAL
      </label>
      <li>
        <NavLink
          to="settings"
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
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 rounded-lg transition-all duration-200"
        >
          <IoLogOut size={20} /> LogOut
        </button>
      </li>
    </>
  );

  return (
    <div className="flex-col hidden lg:flex h-full">
      <div className="bg-base-200 lg:w-64 h-full flex flex-col overflow-hidden rounded-xl border border-base-300 shadow-sm">
        <div className="flex items-center justify-center gap-1 mt-6 mb-4 px-4">
          <img src={Logo} alt="Logo" className="w-28 h-auto" />
          <span className="text-xl font-bold text-cyan-700">.Labs</span>
        </div>
        <div className="divider my-2 px-4"></div>
        <div className="flex-1 overflow-y-auto px-3">
          <ul className="menu text-base font-medium">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
