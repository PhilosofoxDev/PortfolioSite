import Page from "../../Templates/Page";
import OverviewTemplate from "../../Templates/OverviewPageStartingTemplate";
import GreenSection from "../../Templates/GreenOverviewSection";
import WhiteSection from "../../Templates/WhiteOverviewSection";

export default function BedmimeOverview() {
  return (
    <div>
      <Page />
      <OverviewTemplate
        Title={
          <h5 className="text-black font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex">
            Bedmime
          </h5>
        }
      />
      <WhiteSection
        ContentLeft={<div></div>}
        ContentRight={<div></div>}
        Heading={``}
      />
      <GreenSection />
    </div>
  );
}
