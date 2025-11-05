import NavBar from "./NavBar.jsx";
import React from "react";
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
export default function Header() {
  return (
    <div className="bg-amber-500/10 align-top items-start ">
      <Router>
        <header className="p-4 pb-6 w-screen">
          <div className="grid grid-cols-2 gap-4 justify-between">
            <div className="Logo flex items-center justify-start">
              <h1 className="text-white text-xl font-bold">
                Logo/Stylized Name
              </h1>
            </div>
            <div className="NavigationBar flex justify-end align-top">
              <nav className="p-4">
                <ul className="grid-cols flex justify-end space-x-10">
                  <li>
                    <Link to="/" className="text-white text-2xl font-bold">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfoliopage"
                      className="text-white text-2xl font-bold"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <HomePage />
      </Router>
    </div>
  );
}
