import "../cssFiles/OverviewSections.css";

export default function GreenSection({ ContentLeft, ContentRight }) {
  return (
    <div className="bg-linear-to-l from-mainGreen to-accentGreen">
      <div className="flex flex-2 justify-evenly w-screen font-Arvo whiteTextGradient pb-10">
        <div className="flex items-center flex-2 ml-5 mr-5 pt-10">
          <div className="w-full justify-items-center flex items-center justify-center">
            {ContentLeft}
          </div>
          <div className="w-full justify-items-center flex items-center justify-center">
            {ContentRight}
          </div>
        </div>
      </div>
    </div>
  );
}
