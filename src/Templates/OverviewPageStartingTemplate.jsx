import "../cssFiles/OverviewSections.css";
export default function OverviewTemplate({ Title }) {
  return (
    <div className="flex flex-col justify-center items-center min-w-screen bg-linear-to-l from-mainWhite to-warmWhite font-Arvo greenTextGradient">
      {Title}
      <div className="w-screen">
        <hr className="bg-linear-to-r from-accentGreen to-mainGreen h-[.65rem] mb-12 mr-70 ml-70 rounded-2xl" />
      </div>
    </div>
  );
}
