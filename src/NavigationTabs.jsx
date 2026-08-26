import NavTab from "./NavTab.jsx";

export default function NavigationTabs() {
  return (
    <div className="NavigationTabs bg-transparent flex font-EmblemaOne self-end sticky top-10">
      <nav className="">
        <ul className="gap-x-0.5 max-md:hidden md:flex text-[1.2rem] text-white font-bold self-center">
          <li className="">
            <NavTab tabName="Home" tabLink="/" />
          </li>
          <li className="">
            <NavTab tabName="Portfolio" tabLink="/portfolio" />
          </li>
          <li className="">
            <NavTab tabName="Resume" tabLink="/resume" />
          </li>
          <li className="">
            <NavTab tabName="Contact" tabLink="/contact" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
