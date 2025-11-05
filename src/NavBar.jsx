import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageTemplate from "./pages/PortfolioItemPageTemplate.jsx";

export default function NavBar() {
  return (
    <Router>
      <nav className="p-4">
        <ul className="grid-cols flex justify-end space-x-10">
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
    </Router>
  );
}
