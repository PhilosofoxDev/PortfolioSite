import React from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-mainWhite">
      <Header /> {/* Contains NavTabs */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
