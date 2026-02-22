import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="NavigationBar bg-transparent flex items-start font-EmblemaOne">
      <nav className="flex p-4 navbar">
        <div className="flex flex-col max-md:w-screen">
          <button
            className="navButton menu-btn md:hidden self-start"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {/* Drop-Down code*/}
          {isOpen && (
            <ul className="dropdown flex flex-col text-[1.3rem] sm:text-2xl md:hidden max-w-0.5">
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
          )}
        </div>
        <ul className="max-md:hidden md:flex space-x-15 text-[1.8rem] text-white font-bold self-center">
          <li className="">
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
