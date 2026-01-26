import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageTemplate from "./pages/PortfolioItemPageTemplate.jsx";

export default function NavBar() {
  return (
    <div className="NavigationBar bg-transparent flex justify-end align-top pr-10">
      <nav className="p-4">
        <ul className="grid-cols flex space-x-10">
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
          <li>
            <Link to="/aboutpage" className="text-white text-2xl font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/resumepage" className="text-white text-2xl font-bold">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
