import "../src/cssFiles/NavTab.css";

export default function NavTab({ tabName, tabLink }) {
  return (
    <div>
      <a
        href={tabLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-green-800 border-4 border-t-0 rounded-b-lg border-black pr-10 pl-10 pt-3 pb-3 max-w-[150px] text-xl text-mainWhite"
      >
        {tabName}
      </a>
    </div>
  );
}
