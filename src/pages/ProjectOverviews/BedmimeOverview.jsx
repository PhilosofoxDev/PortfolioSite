import Page from "../../Templates/Page";
import OverviewTemplate from "../../Templates/OverviewPageStartingTemplate";
import GreenSection from "../../Templates/GreenOverviewSection";
import WhiteSection from "../../Templates/WhiteOverviewSection";

import BedmimeImage from "../../assets/images/BedmimeTitle.png";

export default function BedmimeOverview() {
  // Add section headers manually by adding two separate elements
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
        ContentRight={
          <div className="w-full">
            <h6 className="overviewTextHeaderWhite flex w-full justify-center">
              Project Overview
            </h6>
            <h6 className="overviewTextBodyWhite h-full mr-3 ml-15 mt-2 justify-start">
              BEDMIME is a 3D, final-stand survival horror game simmilar in
              essence to the indie smash-hit{" "}
              <i className="font-ArvoItalic">Five Nights at Freddy's</i>. The
              player, confined to a bedroom with nothing but a flashlight, must
              fight back against an uncanny and misformed mime by shining the
              light in its eyes'. As the game progresses, the mime will come
              back faster with less patience before attacking. The goal of the
              game is to survive as long as possible before the Mime's speed
              overwhelms your senses.
            </h6>
          </div>
        }
      />
      <GreenSection
        className="greenBackground"
        ContentLeft={
          <h6 className="overviewTextBodyGreen h-full ml-15 mt-5 flex justify-center">
            Hello
          </h6>
        }
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
