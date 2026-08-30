import GameProjects from "../GameProjects";
import ProjectsFooter from "../unused/ProjectsFooter";

import NLDark from "../assets/images/NLDark_NoBG.png";
import NLLight from "../assets/images/NLLight_NoBG.png";
import NLOrange from "../assets/images/NLOrange_NoBG.png";
import "../cssFiles/ProjectsPAge.css";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-linear-to-l to-warmWhite from-mainWhite">
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen lg:mb-10">
        <h1 className="greenTextGradient font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex">
          Game Projects
        </h1>
        <h2 className="greenTextGradient font-Valve xl:text-2xl lg:text:lg md:text-md flex mb-2">
          You can find all of my Game Development projects here.
        </h2>
        <div className="flex flex-col">
          <div className="w-screen">
            <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[.65rem] mt-2 mb-12 mr-60 ml-60 rounded-2xl" />
          </div>
        </div>
        <GameProjects />
      </div>
    </div>
  );
}
