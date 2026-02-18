import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageTemplate from "./pages/PortfolioItemPageTemplate.jsx";

export default function NavBar() {
  return (
    <div className="NavigationBar bg-transparent flex justify-end items-center pr-10 font-EmblemaOne">
      <nav className="items-center p-4">
        <ul className="flex space-x-10 text-[1.7rem] text-white font-bold self-center">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/resume" className="">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
