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
          <h5 className="text-black font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex">
            Bedmime
          </h5>
        }
      />
      <WhiteSection
        ContentLeft={
          <div>
            <img src={BedmimeImage} alt="Bedmime" className="w-100 h-auto" />
          </div>
        }
        ContentRight={
          <div>
            <img src={BedmimeImage} alt="Bedmime" className="w-100 h-auto" />
          </div>
        }
      />
      <GreenSection
        ContentLeft={
          <div>
            <img src={BedmimeImage} alt="Bedmime" className="w-100 h-auto" />
          </div>
        }
        ContentRight={
          <div>
            <img src={"#"} alt="Bedmime" className="w-100 h-auto" />
          </div>
        }
      />
    </div>
  );
}
