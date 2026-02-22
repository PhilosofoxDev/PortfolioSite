import PItemTemplate from "./PortfolioItemPageTemplate";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function PorfolioPage() {
  return (
    <div className="flex items-align-center justify-around min-w-screen bg-stone-800">
      <div className="flex flex-col items-center sm:flex-row gap-x-30 gap-y-10 align-bottom justify-center max-w-screen px-20 py-40">
        <Link to="/gamePortfolio" className="">
          <PItemTemplate
            CardName="GAME DEV"
            CardDesc="My game development projects."
          />
        </Link>
        <Link to="/webPortfolio" className="">
          <PItemTemplate
            CardName="WEB DEV"
            CardDesc="My web development projects."
          />
        </Link>
        <Link to="/UIXPortfolio" className="">
          <PItemTemplate
            CardName="UI/UX"
            CardDesc="My UI/UX design projects."
          />
        </Link>
      </div>
    </div>
  );
}
