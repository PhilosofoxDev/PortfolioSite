import Page from "../../Templates/Page";
import OverviewTemplate from "../../Templates/OverviewPageStartingTemplate";
import GreenSection from "../../Templates/GreenOverviewSection";
import WhiteSection from "../../Templates/WhiteOverviewSection";

import BedmimeImage from "../../assets/images/BedmimeTitle.png";

export default function BedmimeOverview() {
  return (
    <div>
      <Page />
      <OverviewTemplate
        Title={
          <h5 className=" font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex">
            Bedmime
          </h5>
        }
      />
      <WhiteSection
        ContentLeft={
          <img
            src={BedmimeImage}
            alt="Bedmime"
            className="whiteBgOverviewImage"
          />
        }
        ContentRight={<p className=" font-PatuaOne text-4xl mb-4">Overview</p>}
      />
      <GreenSection
        className="greenBackground"
        ContentLeft={<p className="font-PatuaOne text-4xl mb-4">Description</p>}
        ContentRight={
          <img
            src={BedmimeImage}
            alt="Bedmime"
            className="greenBgOverviewImage"
          />
        }
      />
    </div>
  );
}
