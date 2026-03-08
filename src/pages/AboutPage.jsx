import duckPFP from "../assets/images/KissingDuckPFPSquare.webp";
export default function AboutPage() {
  return (
    <div className="overscroll-x-none flex items-center pt-20 flex-col min-h-screen min-w-screen bg-stone-800">
      <div className="Intro flex mb-6 justify-center gap-x-3 md:gap-x-10 lg:gap-x-15 items-center min-w-screen">
        <img
          src={duckPFP}
          alt="A duck kissing a computer monitor"
          className="ml-5 sm:ml-0 md:ml-5 size-35 md:size-50 lg:size-80 rounded-xl border-3 lg:border-4 border-orange-500"
        />
        <div className="flex flex-col ml-4 text-2xl md:text-4xl lg:text-[3rem] gap-y-2">
          <h1 className="font-bold font-EmblemaOne text-orange-500">
            Nathan Lomnicky
          </h1>
          <p className=" text-gray-100 font-EmblemaOne text-xl md:text-2xl lg:text-3xl">
            Independent Game and Web Developer
          </p>
        </div>
      </div>
      <div className="Body mt-20 mb-10 text-center">
        <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-orange-500 font-EmblemaOne">
          About Me
        </h1>
        {/* clearer font for bulk text sections? */}
        {/* figure out how to change line spacing in a text element */}
        <p className="text-lg font-bold lg:font-normal lg:text-2xl text-white max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl text-center">
          Hey! I'm Nathan, a game and web developer with a passion for creating
          entertaining and immersive experiences for people to enjoy. I am
          currently studying Game Design and Computer Science at Miami
          University, where I am always looking for opportunites to work
          collaboratively on projects with my peers. <br />
          <br />
          As my title above suggests, I focus on the programming and development
          of my game and web projects. I have experience with a variety of
          programming languages and frameworks, including C#, Java, Python,
          HTML, and even niecher languages like GDScript. I am also well-versed
          in using game engines such as Unity, Godot, and Unreal Engine to craft
          fun and engaging experiences.
          <br />
          <br />
          My passion as a developer stems from my love for working with and
          entertaining others. I have alawys been a strong advocate for the
          power of video games to bring people together through incredible
          storytelling, entertaing gameplay, and living, breathing worlds. If I
          were able to make a game like that for even one person, I will have
          achieved one of my bigger goals as a developer.
          <br />
          <br />
          Though I am thoroughly devoted to my class-projects and studies, I am
          always finding the time to experement with various engines and
          softwares to build up personal projects that I can be proud of. Only
          being a year and a half into my college career, I am incredibly
          excited to continue learning and growing as a developer, and can't
          wait to see where my passion for development takes me in the future.
        </p>
      </div>
    </div>
  );
}
