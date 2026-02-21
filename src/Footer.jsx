import insta from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";
import email from "./assets/images/mail.png";
import "./cssFiles/Footer.css";

export default function Footer() {
  return (
    <div className="bg-stone-900 align-top items-start overscroll-x-none w-screen border-t-3 border-orange-600 pt-5">
      <footer className="p-4 pb-6 w-screen">
        <div className="Logo flex items-center justify-center">
          <a href="https://www.instagram.com/nathan.nikc/" target="_blank">
            <img alt="insta" src={insta} className="w-12 mr-5 invert-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-lomnicky/"
            target="_blank"
          >
            <img alt="linkedin" src={linkedin} className="size-9 invert-100" />
          </a>
          <a href="mailto:nathanlomnicky@gmail.com" target="_blank">
            <img
              alt="email"
              src={email}
              className="email size-11 invert-100 ml-6"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
