import React from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="h-screen items-start align-top overscroll-x-none">
      <Header /> {/* Contains NavBar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route path="/resumepage" element={<ResumePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
