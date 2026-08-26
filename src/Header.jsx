import NavigationTabs from "./NavigationTabs";

import insta from "./assets/images/instagram.png";
import itch from "./assets/images/itchLogo.png";
import linkedin from "./assets/images/linkedin.png";
import mail from "./assets/images/mail.png";
import "./cssFiles/Header.css";

export default function Header() {
  return (
    <div
      className={`absolute z-10 bg-linear-to-l from-mainGreen to-accentGreen align-top items-start overscroll-x-none w-screen border-b-4 border-black`}
    >
      <header className="w-screen pb-5 pt-5 pr-10 pl-20 flex flex-col items-start justify-center">
        <div
          id="headerMain"
          className="Logo flex items-center justify-start w-screen"
        >
          <div
            id="NameAndTitle"
            className="flex flex-col items-start justify-centers pt-4 font-bold"
          >
            <h1 className="gradient-text text-[5.25rem] tracking-wide font-Valve">
              Nathan Lomnicky
            </h1>
            <h2 className="gradient-text text-[2.75rem] font-PatuaOne tracking-wide pt-1">
              Games and Systems Developer
            </h2>
          </div>
        </div>
        <div
          id="headerDescription"
          className="flex flex-col items-start justify-center"
        >
          <h3 className="text-xl mr-160 font-PatuaOne tracking-wide xl:mr-180 lg:mr-160 md:mr-60">
            Hey! I'm Nathan, a game programmer specialized in the technical
            systems that make experiences fun and engaging, particularly combat
            and player progression.
            <br />
            <br />I enjoy making satisfying and progressive systems for players.
          </h3>
        </div>
        <div className="flex gap-x-10 pt-4">
          <a
            href="https://www.linkedin.com/in/nathan-lomnicky/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin link" className="size-12" />
          </a>
          <a
            href="https://philosofox.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={itch} alt="itch link" className="size-12" />
          </a>
          <a
            href="https://www.instagram.com/nathan.nikc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="instagram link" className="size-12" />
          </a>
          <a
            href="mailto:nathanlomnicky@gmail.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="mail link" className="size-12" />
          </a>
        </div>
      </header>
    </div>
  );
}
