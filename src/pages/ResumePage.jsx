import resumePDF from "../assets/pdfs/Student-Focused Resume.pdf";
import "../cssFiles/ResumePage.css";

export default function ResumePage() {
  return (
    <div className="overscroll-x-none flex items-center pt-15 flex-col min-h-screen min-w-screen bg-stone-800">
      <div className="flex flex-col ml-20 mt-8 mb-6 items-start min-w-screen">
        <h1 className="font-EmblemaOne border-b-3 text-2xl sm:text-3xl lg:text-5xl font-bold pb-2 pr-18 mb-20 text-orange-500">
          Experience
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl pr-20 pb-3 mb-10 font-semibold text-white max-w-xl text-center">
          My Full Resume can be found{" "}
          <a
            href={resumePDF}
            className="text-orange-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}
