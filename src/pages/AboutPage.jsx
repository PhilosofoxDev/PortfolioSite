import duckPFP from "../assets/images/KissingDuckPFPSquare.webp";
export default function AboutPage() {
  return (
    <div className="overscroll-x-none flex items-center pt-15 flex-col min-h-screen min-w-screen bg-stone-900">
      <div className="Intro flex mb-6 justify-center gap-15 items-center min-w-screen">
        <img
          src={duckPFP}
          alt="A duck kissing a computer monitor"
          className="size-70 rounded-xl border-4 border-orange-500"
        />
        <div className="ml-4 text-3xl">
          <h1 className="font-bold font-EmblemaOne text-orange-500">
            Nathan Lomnicky
          </h1>
          <p className=" text-gray-300 font-EmblemaOne text-2xl">
            Independent Game and Web Developer
          </p>
        </div>
      </div>
      <div className="Body mt-20">
        <h1 className="text-5xl font-bold mb-6 text-orange-500">About Me</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">Who am I?</p>
      </div>
    </div>
  );
}
