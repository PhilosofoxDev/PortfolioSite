import duckPFP from "../assets/images/KissingDuckPFPSquare.webp";
export default function AboutPage() {
  return (
    <div className="overscroll-x-none flex items-center pt-20 flex-col min-h-screen min-w-screen bg-stone-800">
      <div className="Intro flex mb-6 justify-center gap-x-15 items-center min-w-screen">
        <img
          src={duckPFP}
          alt="A duck kissing a computer monitor"
          className="size-80 rounded-xl border-4 border-orange-500"
        />
        <div className="flex flex-col ml-4 text-[3rem] gap-y-2">
          <h1 className="font-bold font-EmblemaOne text-orange-500">
            Nathan Lomnicky
          </h1>
          <p className=" text-gray-100 font-EmblemaOne text-3xl">
            Independent Game and Web Developer
          </p>
        </div>
      </div>
      <div className="Body mt-35 text-center">
        <h1 className="text-5xl font-bold mb-6 text-orange-500 font-EmblemaOne">
          About Me
        </h1>
        {/* clearer font for bulk text sections? */}
        {/* figure out how to change line spacing in a text element */}
        <p className="text-2xl text-white min-w-md max-w-5xl text-center">
          Lorem Ipsum dolor sol amet lorem ipsum dolor sol amet Lorem Ipsum
          dolor sol amet lorem ipsum dolor sol amet Lorem Ipsum dolor sol amet
          lorem ipsum dolor sol amet Lorem Ipsum dolor sol amet lorem ipsum
          dolor sol amet
        </p>
      </div>
    </div>
  );
}
