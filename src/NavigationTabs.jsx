import NavTab from "./NavTab.jsx";

export default function NavigationTabs() {
  return (
    <div className="flex font-EmblemaOne self-start sticky top-0 w-screen">
      <nav className="">
        <ul className="gap-x-0.5 max-md:hidden md:flex text-[1.2rem] text-white font-bold self-center">
          <li className="">
            <NavTab tabName="Projects" tabLink="/" />
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
