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
      <div className="flex lg:flex-row flex-col flex-2 justify-evenly w-screen text-mainGreen">
        <div className="mr-10 ml-10 lg:ml-8 lg:mr-0 lg:w-full flex not-lg:justify-center lg:items-start">
          <img
            src={ProjectImageSrc}
            className="border-[0.75rem] border-mainGreen rounded-2xl w-full"
          ></img>
        </div>
        <div className="w-full lg:items-center lg:ml-2">
          <Link to={ProjectOverviewPath}>
            <h1 className="projectCardUnderline self-cemter text-center justify-self-center lg:justify-self-start font-PatuaOne lg:ml-10 mt-4 lg:mt-0 2xl:text-[5rem] xl:text-[4.15rem] lg:text-[3.15rem] md:text-6xl text-[2.55rem] greenTextGradient">
              {ProjectTitle}
            </h1>
          </Link>
          <h2 className="ml-10 mr-10 lg:mr-5 lg:ml-10 mt-4 gameDesc font-PatuaOne text-[1.2rem] sm:text-[1.25rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-2xl whitespace-pre-line leading-none">
            {`${ProjectDescription} ${ProjectToolsUsed ? `\n\nTools Used: ${ProjectToolsUsed}` : ""}`}
          </h2>
          <hr className="m-15 mt-4 mb-0 bg-accentGreen h-0.5" />
          <h2 className="ml-10 mr-10 lg:mr-14 lg:ml-10 mt-5 gameDesc font-Arvo text-[1.1rem] md:text-[1.2rem] xl:text-xl whitespace-pre-line leading-5 lg:leading-6">
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
              rel="noopener noreferrer"
              className="flex projectCardButton w-[40%] rounded-lg justify-center items-center"
            >
              <h1 className="text-sm lg:text-[1rem] font-PatuaOne buttonText text-center">
                {`${ProjectPlatformTitle ? `${ProjectTitle} on ${ProjectPlatformTitle}` : `${ProjectTitle} Website`}`}
              </h1>
            </a>
          </div>
        </div>
      </div>
      <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[.65rem] mt-8 m-12 mb-6 lg:mr-60 lg:ml-60 rounded-2xl" />
    </div>
  );
}
