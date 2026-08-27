import "../src/cssFiles/NavTab.css";

export default function NavTab({ tabName, tabLink }) {
  return (
    <div>
      <a
        href={tabLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-green-700 border-4 border-t-0 rounded-b-lg
         border-black max-w-[150px] font-PatuaOne 2xl:text-3xl xl:text-2xl md:text-lg text-mainWhite 
         2xl:pr-12 2xl:pl-12 xl:pr-5 xl:pl-5 xl:pt-3 xl:pb-3 lg:pr-4 lg:pl-4 lg:pt-2 lg:pb-2 md:pr-2 md:pl-2"
      >
        {tabName}
      </a>
    </div>
  );
}
