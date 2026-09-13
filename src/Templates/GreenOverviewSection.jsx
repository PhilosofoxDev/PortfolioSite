import "../cssFiles/OverviewSections.css";

export default function GreenSection({ ContentLeft, ContentRight }) {
  return (
    <div className="lg:min-h-100 bg-linear-to-l from-mainGreen to-accentGreen font-Arvo greenTextGradient">
      <div className="flex items-center flex-2">
        <div className="min-w-[50%] justify-items-center">{ContentLeft}</div>
        <div className="min-w-[50%] justify-items-center">{ContentRight}</div>
      </div>
    </div>
  );
}
