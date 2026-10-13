import GameProjects from "../GameProjects";
import Page from "../Templates/Page.jsx";

import "../cssFiles/GamesPage.css";

export default function GamesPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-linear-to-l to-warmWhite from-mainWhite">
      <Page />
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen lg:mb-10 scroll-mt-38">
        <h1 className="greenTextGradient font-Valve xl:text-8xl lg:text-7xl sm:text-7xl text-5xl lg:mt-0 mt-4 flex">
          Games
        </h1>
        <h2 className="greenTextGradient font-Valve xl:text-2xl lg:text-xl sm:text-xl text-[0.9rem] mr-2 ml-2 lg:mr-0 lg:ml-0 flex mb-2 text-center">
          You can find my Game Development projects here.
        </h2>
        <div className="flex flex-col">
          <div className="w-screen">
            <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[.65rem] mt-2 m-12 mb-6 lg:mr-60 lg:ml-60 rounded-2xl" />
          </div>
        </div>
        <GameProjects />
      </div>
    </div>
  );
}
