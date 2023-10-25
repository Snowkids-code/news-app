import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
