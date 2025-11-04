import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 px-4 border-b border-base-300 rounded-xl">
      {/* Left Side - Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search"
          className="input w-full max-w-xs rounded-xl"
        />
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-5">
        {/* Notification Button */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator border-10 border-white bg-white rounded-full">
            <IoNotificationsOutline className="h-6 w-6" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {/* User Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
