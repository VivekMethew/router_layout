import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="AppLayout">
      <div className="w-full h-screen overflow-hidden">
        <div className="pb-2">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
