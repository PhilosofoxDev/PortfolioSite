import NavTab from "./Templates/NavTab.jsx";

import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function NavigationTabs() {
  return (
    <div className="flex font-EmblemaOne justify-center sm:justify-start sticky top-0 w-screen">
      <nav className="">
        <ul className="flex text-[1.2rem] text-white font-bold self-center w-full justify-between">
          <li className="">
            <NavTab tabName="Games" tabLink="/games" />
          </li>
          <li className="">
            <NavTab tabName="Design" tabLink="/design" />
          </li>
          <li className="">
            <NavTab tabName="Contact" tabLink="/contact" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
