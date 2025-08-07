import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Header2 from "./Header2";
// import Header3 from "./Header3";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <>
      <div className="hidden md:block"><TopBar /></div>
      {/* <Header /> */}
      <Header2 />
      <main className="container-fluid mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
};

export default Layout;