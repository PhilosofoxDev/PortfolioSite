import NavBar from "./NavBar.jsx";
import React from "react";
import { BrowserRouter as Router, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
export default function Header() {
  return (
    <div className="bg-stone-900 align-top items-start">
      <header className="p-4 pb-6 w-screen">
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div className="Logo flex items-center justify-start">
            <h1 className="text-white text-xl font-bold pl-5">
              Logo/Stylized Name
            </h1>
          </div>
          <div className="NavigationBar bg-white/50 flex justify-center align-top">
            <nav className="p-4">
              <ul className="grid-cols flex space-x-50">
                <li>
                  <Link to="/" className="text-white text-3xl font-bold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfoliopage"
                    className="text-white text-3xl font-bold"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
