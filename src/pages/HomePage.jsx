import NLDark from "../assets/images/NLDark_NoBG.png";
import NLLight from "../assets/images/NLLight_NoBG.png";
import NLOrange from "../assets/images/NLOrange_NoBG.png";
import "../cssFiles/HomePage.css";

export default function HomePage() {
  return (
    <div className="noScroll flex flex-col justify-center bg-stone-900">
      <div className="flex flex-col items-center self-center justify-center min-h-screen min-w-screen bg-stone-500">
        {/* Video here in future ^^^ */}
        {/* <iframe
          width="105%"
          height="100%"
          src=""
          title="YouTube video player"
          frameborder="4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="demoReel flex absolute self-center"
        ></iframe> */}
        {/* remove zeros on 'outline' and 'bg' to add them back. 'bg' still needs some kind of opactiy */}
        <div className="flex flex-col sm:text-[1.5rem] md:text-[1.9rem] lg:text-[2.3rem] xl:text-5xl items-center gap-y-3 font-outline z-1 bg-stone-900/60 p-4 rounded-2xl pl-8 pr-8 outline-2 outline-orange-600">
          <h1 className="flex font-bold align-bottom text-orange-500 text-shadow-stone-900">
            Nathan Lomnicky
          </h1>

          <img
            src={NLOrange}
            alt="Logo"
            className="size-20 sm:size-30 md:size-40 lg:size-65 xl:size-75 align-baseline static"
          />
          <h1 className="flex font-bold align-bottom text-orange-500 font-EmblemaOne">
            Game + Web Development
          </h1>
        </div>
      </div>
    </div>
  );
}
