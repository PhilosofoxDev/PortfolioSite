import "../cssFiles/OverviewSections.css";

export default function GreenSection({ ContentLeft, ContentRight, Heading }) {
  return (
    <div className="flex flex-col justify-center items-center lg:min-h-100 min-w-screen bg-linear-to-r from-mainGreen to-accentGreen font-Arvo">
      {Heading}
      <div className=" felx flex-2">
        {ContentLeft}
        {ContentRight}
      </div>
    </div>
  );
}
