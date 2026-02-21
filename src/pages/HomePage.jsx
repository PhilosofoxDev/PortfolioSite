import NLDark from "../assets/images/NLDark_NoBG.png";

document.body.style.overflowX = "hidden";
export default function HomePage() {
  return (
    <div className="noScroll flex flex-col justify-center bg-stone-900">
      <div className="flex flex-col items-center self-center justify-center min-h-screen min-w-screen bg-stone-600">
        {/* Video here in future ^^^ */}
        <div className="flex flex-col text-[2.60rem] items-center gap-y-3 bg-stone-900/60 p-5 rounded-2xl outline-2 outline-orange-600">
          <h1 className="flex font-bold align-bottom text-orange-500 text-shadow-white font-EmblemaOne">
            Nathan Lomnicky
          </h1>
          <img
            src={NLDark}
            alt="Logo"
            className="size-45 align-baseline static bg-black p-4 rounded-full"
          />
          <h1 className="flex font-bold align-bottom text-orange-500 text-shadow-white font-EmblemaOne">
            Game + Web Development
          </h1>
        </div>
      </div>
    </div>
  );
}
