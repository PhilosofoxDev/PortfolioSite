import "../cssFiles/OverviewSections.css";

export default function GreenSection({ ContentLeft, ContentRight }) {
  return (
    <div className="lg:min-h-100 bg-linear-to-l from-mainGreen to-accentGreen font-Arvo greenTextGradient">
      <div className="flex justify-around flex-2 min-w-screen">
        {ContentLeft}
        {ContentRight}
      </div>
    </div>
  );
}
