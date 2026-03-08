import insta from "./assets/images/instagram.png";
import itch from "./assets/images/itchLogo.png";
import linkedin from "./assets/images/linkedin.png";
import email from "./assets/images/mail.png";
import { Tooltip } from "react-tooltip";
import React, { useState } from "react";
import "./cssFiles/Footer.css";

export default function Footer() {
  const [tooltipText, setTooltipText] = useState("Copy to Clipboard");
  return (
    <div className="bg-stone-900 align-top items-start overscroll-x-none w-screen border-t-3 border-orange-600 pt-5">
      <footer className="p-4 pb-6 w-screen">
        <div className="flex items-center justify-center gap-x-6">
          <a href="https://www.instagram.com/nathan.nikc/" target="_blank">
            <img alt="insta" src={insta} className="w-12 invert-100" />
          </a>
          <a href="https://philosofox.itch.io/" target="_blank">
            <img alt="itch" src={itch} className="w-12 invert-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-lomnicky/"
            target="_blank"
          >
            <img alt="linkedin" src={linkedin} className="size-9 invert-100" />
          </a>
          <a
            data-tooltip-id="copy-email-tooltip"
            data-tooltip-content={tooltipText}
            onClick={() => {
              navigator.clipboard.writeText("nathanlomnicky@gmail.com");
              setTooltipText("Copied!");
            }}
            onMouseOver={() => {
              setTooltipText("Copy Email Address to Clipboard");
            }}
          >
            <Tooltip id="copy-email-tooltip" />
            <img
              alt="email"
              src={email}
              className="email size-11 invert-100 cursor-pointer"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
