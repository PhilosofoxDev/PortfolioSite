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
      <div className="Body mt-20 mb-10 text-center">
        <h1 className="text-5xl font-bold mb-6 text-orange-500 font-EmblemaOne">
          About Me
        </h1>
        {/* clearer font for bulk text sections? */}
        {/* figure out how to change line spacing in a text element */}
        <p className="text-2xl text-white min-w-md max-w-5xl text-center">
          Hey! My name's Nathan, a game and web developer with a passion for
          creating entertaining and immersive experiences for people to enjoy.
          {/* I have a strong background in programming and design, and I'm always
          looking for new ways to push the boundaries of what's possible in game
          development. Whether it's creating a new game from scratch or working
          on an existing project, I'm dedicated to delivering high-quality work
          that exceeds expectations. When I'm not coding or designing, you can
          find me playing games, exploring new technologies, or spending time
          with friends and family. */}
        </p>
      </div>
    </div>
  );
}
