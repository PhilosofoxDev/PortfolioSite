import Bedmime from "../assets/images/BedmimeTitle.png";
export default function GamePortfolio() {
  return (
    <div className="overscroll-x-none flex flex-col min-h-screen max-w-screen bg-stone-800">
      {/* Video here in future ^^^ */}
      <div className="flex flex-col gap-y-4 ml-65 mt-40">
        <div className="flex items-start gap-x-20">
          <img
            src={Bedmime}
            alt="Bedmime"
            className="w-150 border-4 border-orange-600 rounded-xl "
          />
          <p classname="">Bedmime</p>
        </div>
      </div>
    </div>
  );
}
