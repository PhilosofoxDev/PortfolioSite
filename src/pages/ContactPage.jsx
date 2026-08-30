export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-linear-to-l to-warmWhite from-mainWhite">
      <div className="warmBGGradient flex flex-col items-center min-h-screen min-w-screen lg:mb-10">
        <h1 className="greenTextGradient font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex mb-2">
          Contact
        </h1>
        <div className="flex flex-col">
          <div className="w-screen">
            <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[.65rem] mt-2 m-12 mr-60 ml-60 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
