import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button_link_gray from "../components/Button_link_gray.jsx";

export default function Dashboard() {
  return (
    <>
      <Header />

      <div
        id="top"
        className="min-h-screen relative flex items-center justify-center"
      >
        <Button_link_gray text="Willkommen bei ZAM!" />
      </div>

      <Footer
        children={
          <Button_link_gray
            text="Check out the source code!"
            link="https://github.com/0001-1100-1001-1011/zam-monitoring"
          />
        }
      />
    </>
  );
}
