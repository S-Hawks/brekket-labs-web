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
  IoChevronForward,
  IoLogOut,
} from "react-icons/io5";
import Logo from "../../../assets/Group 427319169.png";

const Sidebar = () => {
  return (
    <div className="drawer drawer-open h-full">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side h-full">
        <div className="is-drawer-close:w-24 is-drawer-open:w-52 bg-base-200 h-full flex flex-col overflow-hidden rounded-xl">
          <label
            htmlFor=""
            className="mt-4 mx-auto text-base font-medium text-cyan-700"
          >
            <img src={Logo} alt="" className="w-20" />
            <span className="is-drawer-close:hidden text-lg font-bold text-cyan-700">
              .Lab
            </span>
          </label>
          {/* Sidebar content here */}
          <ul className="menu w-full text-lg font-medium flex-1 overflow-y-auto overflow-x-hidden">
            <label htmlFor="" className="text-gray-500 text-sm pt-10">
              MENU
            </label>
            {/* Dashboard Home */}
            <li>
              <button>
                <IoHome className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Dashboard</span>
              </button>
            </li>

            {/* Analytics */}
            <li>
              <button>
                <IoStatsChart className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Analytics</span>
              </button>
            </li>

            {/* Profile */}
            <li>
              <button>
                <IoPersonCircle className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Profile</span>
              </button>
            </li>

            {/* Users */}
            <li>
              <button>
                <IoPeople className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Users</span>
              </button>
            </li>

            {/* Projects */}
            <li>
              <button>
                <IoDocument className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Projects</span>
              </button>
            </li>

            {/* Billing */}
            <li>
              <button>
                <IoWallet className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Billing</span>
              </button>
            </li>

            {/* Notifications */}
            <li>
              <button>
                <IoNotifications className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Notifications</span>
              </button>
            </li>

            {/* -------------------------------------- */}
            <label htmlFor="" className="text-gray-500 pt-8 text-sm">
              GENERAL
            </label>
            {/* Settings */}
            <li>
              <button>
                <IoSettings className="inline-block size-4 my-1.5" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
            <li>
              <button>
                <IoLogOut className="inline-block size-5 my-1.5" />
                <span className="is-drawer-close:hidden">LogOut</span>
              </button>
            </li>
          </ul>

          {/* button to open/close drawer */}
          <div className="p-3">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180"
            >
              <IoChevronForward className="inline-block size-4 my-1.5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
