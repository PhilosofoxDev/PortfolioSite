import "../cssFiles/OverviewSections.css";

export default function WhiteSection({ ContentLeft, ContentRight }) {
  return (
    <div className="lg:min-h-100 bg-linear-to-l from-mainWhite to-warmWhite font-Arvo greenTextGradient">
      <div className="flex items-center flex-2">
        <div className="min-w-[50%] justify-items-center">{ContentLeft}</div>
        <div className="min-w-[50%] justify-items-center">{ContentRight}</div>
      </div>
    </div>
  );
}
