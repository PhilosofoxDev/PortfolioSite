import PItemTemplate from "./PortfolioItemPageTemplate";
export default function PorfolioPage() {
  return (
    <div className="flex items-align-center justify-around min-h-150 min-w-screen bg-stone-950">
      <div className="flex gap-x-30 align-bottom justify-center max-w-screen px-20 py-40">
        <PItemTemplate
          CardName="GAME DEV"
          CardDesc="My game development projects."
        />
        <PItemTemplate
          CardName="WEB DEV"
          CardDesc="My web development projects."
        />
        <PItemTemplate CardName="UI/UX" CardDesc="My UI/UX design projects." />
      </div>
    </div>
  );
}
