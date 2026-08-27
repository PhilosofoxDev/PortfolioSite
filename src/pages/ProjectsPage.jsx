import GameProjects from "../GameProjects";

import NLDark from "../assets/images/NLDark_NoBG.png";
import NLLight from "../assets/images/NLLight_NoBG.png";
import NLOrange from "../assets/images/NLOrange_NoBG.png";
import "../cssFiles/ProjectsPAge.css";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-linear-to-l to-warmWhite from-mainWhite">
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen lg:mb-10">
        <h1 className="greenTextGradient font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex mb-2">
          Projects
        </h1>
        <div className="flex flex-col sticky top-8">
          <div className="text-mainGreen flex gap-x-8 xl:text-3xl lg:text-2xl items-center justify-center font-PatuaOne">
            <a href="#">
              <p className="border-b-4 border-siteAccent">Games</p>
            </a>
            <p>&#x2022;</p>
            <a href="#">
              <p className="">Web Apps</p>
            </a>
            <p>&#x2022;</p>
            <a href="#">
              <p className="">Design</p>
            </a>
          </div>
          <div className="w-screen sticky top-22">
            <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[0.3rem] mt-2 m-25 rounded-2xl" />
          </div>
        </div>
        <GameProjects />
      </div>
    </div>
  );
}
