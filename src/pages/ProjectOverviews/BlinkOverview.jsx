import Page from "../../Templates/Page";
import OverviewTemplate from "../../Templates/OverviewPageStartingTemplate";
import GreenSection from "../../Templates/GreenOverviewSection";
import WhiteSection from "../../Templates/WhiteOverviewSection";

import BedmimeImage from "../../assets/images/BedmimeTitle.png";

export default function BlinkOverview() {
  // Add section headers manually by adding two separate elements
  return (
    <div>
      <Page />
      <OverviewTemplate
        Title={
          <h5 className=" font-Valve xl:text-8xl lg:text-7xl md:text-6xl flex">
            BLINK Festival
          </h5>
        }
      />
      <WhiteSection
        ContentLeft={
          <img
            src={BedmimeImage}
            alt="Blink"
            className="whiteBgOverviewImage"
          />
        }
        ContentRight={
          <div className="w-full">
            <h6 className="overviewTextHeaderWhite flex w-full justify-center text-6xl">
              Project Overview
            </h6>
            <h6 className="overviewTextBodyWhite h-full mr-3 ml-6 mt-2 justify-start leading-7.5 text-xl">
              BEDMIME is a 3D, final-stand survival horror game simmilar in
              essence to the indie smash-hit{" "}
              <i className="font-ArvoItalic">Five Nights at Freddy's</i>. The
              player, confined to a bedroom with nothing but a flashlight, must
              fight back against an uncanny and misformed mime by shining the
              light in its eyes. As the game progresses, the mime will come back
              faster and with less patience before attacking. The goal of the
              game is to survive as long as posnst an uncanny and misformed mime
              by shining the light in its eyes'.
              <br />
              <br />
              This was one of my first game projects, a simple concept I used
              early on to help me figure out the basics of Unity, game
              development concepts, and C#.
            </h6>
          </div>
        }
      />
      {/* <GreenSection
        ContentLeft={
          <div className="w-full h-full flex flex-col">
            <h6 className="overviewTextHeaderWhite flex w-full justify-center text-5xl leading-13 text-center">
              Gameplay Element: <br />
              Progressive Difficulty Ramp
            </h6>
            <h6 className="overviewTextBodyWhite h-full mr-3 ml-6 mt-2 justify-start leading-7.5 text-xl">
              After deciding on the simple "final stand" mechanic, it was
              apparent the primary challenge in BEDMIME would come from the
              having less and less time to respond to the Mime's attacks. <br />
              <br />
              In pursuit of this, I first implemented a system that tied the
              mime's delay to the amount of time passed since the game had
              begun. During testing, however, I discovered that this mechanic
              punished players who had a hard time at the start of the game, as
              it sped up too quickly and failed them just as fast.
            </h6>
          </div>
        }
      /> */}
    </div>
  );
}
