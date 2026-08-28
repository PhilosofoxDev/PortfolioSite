import "../cssFiles/ProjectCardTemplate.css";
import { Link } from "react-router-dom";

// Add tools used to page that further describes project
export default function PortfolioCardTemplate({
  ProjectImageSrc,
  ProjectTitle,
  ProjectDescription,
  ProjectNotes,
  ProjectOverviewPath,
  ProjectPublishedPlatform,
  ProjectPlatformLink,
}) {
  return (
    <div>
      <div className="flex flex-2 justify-evenly w-screen text-mainGreen">
        <div className="w-full">
          <img src={ProjectImageSrc} className="ml-10"></img>
        </div>
        <div className="w-full">
          <h1 className="justify-self-center font-PatuaOne text-7xl greenTextGradient underline">
            {ProjectTitle}
          </h1>
          <h2 className="ml-20 mt-4 gameDesc font-PatuaOne text-2xl whitespace-pre-line leading-none">
            {ProjectDescription}
          </h2>
          <hr className="m-15 mt-2 mb-0 bg-accentGreen h-0.5" />
          <h2 className="ml-20 mt-5 gameDesc font-Arvo text-xl whitespace-pre-line leading-7">
            {ProjectNotes}
          </h2>
          <div className="flex h-12 ml-20 mr-20 gap-x-10 mt-6 rounded-2xl">
            <Link
              to={ProjectOverviewPath}
              className="flex projectCardButton w-[65%] rounded-lg justify-center items-center"
            >
              <h1 className="text-xl font-PatuaOne buttonText">
                Project Overview
              </h1>
            </Link>
            <a
              href={ProjectPlatformLink}
              target="_blank"
              className="flex projectCardButton w-[35%] rounded-lg justify-center items-center"
            >
              <h1 className="text-xl font-PatuaOne buttonText">
                {ProjectTitle} on {ProjectPublishedPlatform}
              </h1>
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-2 mt-12 mb-13 mr-30 ml-30 rounded-2xl" />
    </div>
  );
}
