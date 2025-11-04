import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import { Outlet } from "react-router";

const DashboardRoot = () => {
  return (
    <div className="flex h-screen overflow-hidden gap-2 p-3">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden gap-2">
        <div>
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto bg-base-200 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
