import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer2 from "./Footer2";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <>
      <div className="hidden md:block"><TopBar /></div>
      <Header />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
      <Footer2 />
      <BottomBar />
    </>
  );
};

export default Layout;