import React from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import Footer from "./Footer.jsx";
import GamePortfolio from "./pages/GamePortfolio.jsx";
import WebPortfolio from "./pages/WebPortfolio.jsx";
import UIXPortfolio from "./pages/UIXPortfolio.jsx";

function App() {
  return (
    <div className="h-screen items-start align-top overscroll-x-none">
      <Header /> {/* Contains NavBar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gamePortfolio" element={<GamePortfolio />} />
        <Route path="/webPortfolio" element={<WebPortfolio />} />
        <Route path="/UIXPortfolio" element={<UIXPortfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
