import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button_link_gray from "../components/Button_link_gray.jsx";
import Button_back from "../components/Button_back.jsx";
import HeaderNavigation from "../components/HeaderNavigation.jsx";
import HostGrid from "../components/HostGrid.jsx";
import BoxInfo from "../components/InfoBox.jsx";

export default function Dashboard() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        {/* HEADER */}
        <HeaderNavigation />
        {/* MAIN CONTAINER */}
        <div className="flex-1 overflow-auto bg-zinc-800  border border-black m-4">
          {/* QUICK INFO BOX */}
          <BoxInfo />
          {/* HOST GRID */}
          <HostGrid />
        </div>
      </div>
    </>
  );
}
