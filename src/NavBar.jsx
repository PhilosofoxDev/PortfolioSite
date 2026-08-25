import {
  HashRouter as Router,
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
    <div className="NavigationBar bg-transparent grid-cols-2 font-EmblemaOne self-end">
      <nav className="flex p-4 navbar">
        <ul className="max-md:hidden md:flex space-x-15 text-[1.2rem] text-white font-bold self-center">
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
