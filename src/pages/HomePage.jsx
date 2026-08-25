import NLDark from "../assets/images/NLDark_NoBG.png";
import NLLight from "../assets/images/NLLight_NoBG.png";
import NLOrange from "../assets/images/NLOrange_NoBG.png";
import "../cssFiles/HomePage.css";

export default function HomePage() {
  return (
    <div className="noScroll flex flex-col justify-center items-center w-screen h-screen">
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen">
        <p className="greenTextGradient font-Valve text-7xl flex mt-10 pb-6">
          Projects
        </p>
        <div className="flex gap-x-10 text-black text-3xl">
          <a href="#">
            <p className="border-b-4">Games</p>
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
      </div>
    </div>
  );
}
