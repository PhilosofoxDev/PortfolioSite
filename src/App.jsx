import React, { useState, useRef } from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [isShrunk, setIsShrunk] = useState(false);
  const scrollableBodyRef = useRef(null);

  const useEffect = () => {
    const handleScroll = () => {
      if (!scrollableBodyRef.current) return;

      const scrollTop = scrollableBodyRef.current.scrollTop;
      if (scrollTop > 30) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
        alert("not Scrolled");
      }
    };

    const currentBody = scrollableBodyRef.current;
    if (currentBody) {
      currentBody.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentBody) {
        currentBody.removeEventListener("scroll", handleScroll);
      }
    };
  };

  return (
    <div
      onScroll={useEffect}
      className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-mainWhite"
    >
      <Header className={`${isShrunk ? "font-BOD" : "font-BOD"}`} />
      {/* Contains NavTabs */}
      <p className="text-black pl-10 text-2xl">{window.scrollY}</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
