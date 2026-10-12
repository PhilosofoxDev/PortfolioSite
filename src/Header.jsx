import NavigationTabs from "./NavigationTabs";

import insta from "./assets/images/instagram.png";
import itch from "./assets/images/itchLogo.png";
import linkedin from "./assets/images/linkedin.png";
import mail from "./assets/images/mail.png";
import "./cssFiles/Header.css";

export default function Header() {
  return (
    <div
      className={`static bg-linear-to-l from-mainGreen to-accentGreen align-top items-start overscroll-x-none w-screen border-b-4 border-black`}
    >
      <header className="w-screen pb-5 pt-5 pr-10 pl-10 flex flex-col">
        <div
          id="NameAndTitle"
          className="flex flex-col items-center md:items-start justify-center font-bold sm:pt-4"
        >
          <h1 className="gradient-text 2xl:text-[6rem] xl:text-[5.25rem] lg:text-[4.5rem] md:text-[3.75rem] sm:text-[3rem] text-[2.5rem] tracking-wide font-Valve">
            Nathan Lomnicky
          </h1>
          <h2 className="gradient-text center 2xl:text-[3.35rem] xl:text-[2.75rem] lg:text-[2.25rem] md:text-[2rem] text-[1.4rem] font-PatuaOne tracking-wide pt-1 mb-3 lg:mb-0">
            Gameplay Engineer and Web Developer
          </h2>
        </div>
        <div
          id="headerDescription"
          className="flex flex-col items-center md:items-start justify-center"
        >
          <h3 className="2xl:text-2xl lg:text-xl md:text-lg text-md font-PatuaOne tracking-wide xl:mr-[40%] lg:mr-[30%] md:mr-[20%] sm:mr-[10%] wrap-anywhere text-center md:text-start">
            Hey! I'm Nathan, a programmer specialized in the underlying gameplay
            systems that make experiences fun and engaging, particularly in
            combat and player progression.
            <br />
            <br />
            When I'm not making games, I enjoy building websites and other web
            applications.
          </h3>
        </div>
        <div className="flex lg:gap-x-10 gap-x-10 pt-4 justify-center sm:justify-start">
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
            href="mailto:nathanlomnicky@gmail.com"
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
