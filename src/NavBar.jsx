import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageTemplate from "./pages/PortfolioItemPageTemplate.jsx";
import "./cssFiles/Navbar.css";

export default function NavBar() {
  return (
    <div className="NavigationBar bg-transparent flex justify-end items-center pr-10 font-EmblemaOne">
      <nav className="items-center p-4 navbar">
        <ul className="flex space-x-15 text-[1.8rem] text-white font-bold self-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
