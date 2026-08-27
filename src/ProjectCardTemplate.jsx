import "../src/cssFiles/ProjectCardTemplate.css";

export default function PortfolioCardTemplate({
  ProjectImageSrc,
  ProjectTitle,
  ProjectDescription,
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
          <h2 className="ml-20 mt-4 gameDesc font-PatuaOne text-3xl whitespace-pre-line leading-none">
            {ProjectDescription}
          </h2>
        </div>
      </div>
      <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[0.3rem] mt-2 m-25 rounded-2xl" />
    </div>
  );
}
