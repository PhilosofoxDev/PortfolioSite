import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageTemplate from "./pages/PortfolioItemPageTemplate.jsx";

export default function NavBar() {
  return (
    <Router>
      <nav className="bg-purple-950 p-4">
        <ul className="grid-cols-3 flex justify-around items-center space-x-4">
          <li>
            <Link to="/" className="text-white text-2xl font-bold">
              Home
            </Link>
          </li>

          <li>
            <Link to="/portfoliopage" className="text-white text-2xl font-bold">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfoliopage" element={<PageTemplate />} />
      </Routes>
    </Router>
  );
}
