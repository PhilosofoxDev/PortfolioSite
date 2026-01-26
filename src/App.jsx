import React from "react";
import "tailwindcss";
import Header from "./Header.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

function App() {
  return (
    <div className="h-screen items-start align-top overscroll-x-none">
      <Header /> {/* Contains NavBar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
