import "../cssFiles/ProjectCardTemplate.css";
import { Link } from "react-router-dom";

// Add tools used to page that further describes project
export default function PortfolioCardTemplate({
  ProjectImageSrc, // Image source for the project card (First thing we want employers to see for this project)
  ProjectTitle,
  ProjectDescription,
  ProjectToolsUsed, // Tools separated by commas
  ProjectNotes,
  ProjectOverviewPath,
  ProjectPlatformTitle,
  ProjectPlatformLink,
}) {
  return (
    <div>
      <div className="flex flex-2 justify-evenly w-screen text-mainGreen">
        <div className="w-full items-center flex">
          <img src={ProjectImageSrc} className="cardImage"></img>
        </div>
        <div className="w-full items-center">
          <Link to={ProjectOverviewPath}>
            <h1 className="projectCardUnderline justify-self-center font-PatuaOne text-7xl greenTextGradient">
              {ProjectTitle}
            </h1>
          </Link>
          <h2 className="ml-20 mt-4 gameDesc font-PatuaOne text-2xl whitespace-pre-line leading-none">
            {`${ProjectDescription} ${ProjectToolsUsed ? `\n\nTools Used: ${ProjectToolsUsed}` : ""}`}
          </h2>
          <hr className="m-15 mt-2 mb-0 bg-accentGreen h-0.5" />
          <h2 className="ml-20 mt-5 gameDesc font-Arvo text-xl whitespace-pre-line leading-6 mr-10">
            {ProjectNotes}
          </h2>
          <div className="flex h-12 ml-20 mr-20 gap-x-4 mt-6 rounded-2xl">
            <Link
              to={ProjectOverviewPath}
              className="flex projectCardButton w-[60%] rounded-lg justify-center items-center"
            >
              <h1 className="text-xl font-PatuaOne buttonText">
                Project Overview
              </h1>
            </Link>
            <a
              href={ProjectPlatformLink}
              target="_blank"
              className="flex projectCardButton w-[40%] rounded-lg justify-center items-center"
            >
              <h1 className="text-lg font-PatuaOne buttonText text-center">
                {`${ProjectPlatformTitle ? `${ProjectTitle} on ${ProjectPlatformTitle}` : `${ProjectTitle} Website`}`}
              </h1>
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-2 mt-12 mb-13 mr-30 ml-30 rounded-2xl" />
    </div>
  );
}
