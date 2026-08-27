import "../cssFiles/ProjectFooter.css";

export default function ProjectsFooter() {
  return (
    <div className="flex gap-x-8 xl:text-3xl lg:text-2xl items-center justify-center font-PatuaOne sticky bottom-0 w-screen bg-linear-to-l from-mainGreen to-accentGreen p-2">
      <a href="#">
        <p className="border-b-4 border-siteAccent">Games</p>
      </a>
      <p>&#x2022;</p>
      <a href="#">
        <p className="">Web Apps</p>
      </a>
      <p>&#x2022;</p>
      <a href="#">
        <p className="">Design</p>
      </a>
    </div>
  );
}
