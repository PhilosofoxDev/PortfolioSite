import "../cssFiles/OverviewSections.css";

export default function WhiteSection({ ContentLeft, ContentRight }) {
  return (
    <div className="lg:min-h-100 bg-linear-to-l from-mainWhite to-warmWhite font-Arvo greenTextGradient">
      <div className="flex justify-around flex-2 min-w-screen">
        {ContentLeft}
        {ContentRight}
      </div>
    </div>
  );
}
