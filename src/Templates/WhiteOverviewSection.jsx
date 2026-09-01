import "../cssFiles/OverviewSections.css";

export default function WhiteSection({ ContentLeft, ContentRight, Heading }) {
  return (
    <div className="flex flex-col justify-center items-center lg:min-h-100 min-w-screen bg-linear-to-l from-mainWhite to-warmWhite font-Arvo greenTextGradient">
      {Heading}
      <div className=" felx flex-2">
        {ContentLeft}
        {ContentRight}
      </div>
    </div>
  );
}
