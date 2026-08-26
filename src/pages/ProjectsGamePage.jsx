import NLDark from "../assets/images/NLDark_NoBG.png";
import NLLight from "../assets/images/NLLight_NoBG.png";
import NLOrange from "../assets/images/NLOrange_NoBG.png";
import "../cssFiles/ProjectsGamePAge.css";

export default function ProjectsGamePage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen pb-10">
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen">
        <p className="greenTextGradient font-Valve text-7xl flex pb-6">
          Projects
        </p>
        <div className="flex flex-col sticky top-5">
          <div className="text-mainGreen flex gap-x-10 text-3xl items-center justify-center font-PatuaOne">
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
            <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[0.3rem] mt-5 m-25 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
