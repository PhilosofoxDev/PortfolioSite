import "../cssFiles/NavTab.css";
import { Link } from "react-router-dom";

export default function NavTab({ tabName, tabLink }) {
  return (
    <div className="w-full">
      <Link
        to={tabLink}
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-green-700 border-4 border-t-0 rounded-b-lg
         border-black md:max-w-[150px] font-PatuaOne 2xl:text-3xl xl:text-2xl text-2xl text-mainWhite 
         2xl:pr-12 2xl:pl-12 xl:pr-7 xl:pl-7 xl:pt-3 xl:pb-3 lg:pr-6 lg:pl-6 lg:pt-2 lg:pb-2 md:pr-5 md:pl-5 md:pt-2 md:pb-2 sm:pr-4 sm:pl-4 pr-3 pl-3 pt-1 pb-1"
      >
        {tabName}
      </Link>
    </div>
  );
}
