import React, { useState, useRef, useEffect } from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [isShrunk, setIsShrunk] = useState(false);
  const scrollableBodyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollableBodyRef.current) return;

      const scrollTop = scrollableBodyRef.current.scrollTop;
      setIsShrunk(scrollTop > 30);
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
  });

  return (
    <div className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-mainWhite">
      <Header className={` ${isShrunk ? "bg-accentGreen" : "bg-amber-600"}`} />{" "}
      {/* Contains NavTabs */}
      <Routes ref={scrollableBodyRef}>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
