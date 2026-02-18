import insta from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";

export default function Footer() {
  return (
    <div className="bg-black align-top items-start overscroll-x-none w-screen pt-5">
      <footer className="p-4 pb-6 w-screen">
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div className="Logo flex items-center justify-start">
            <a href="https://www.instagram.com/nathan.nikc/" target="_blank">
              <img alt="insta" src={insta} className="w-25" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-lomnicky/"
              target="_blank"
            >
              <img alt="linkedin" src={linkedin} className="size-15" />
            </a>
            <a href="mailto:nathanlomnicky@gmail.com" target="_blank">
              <img alt="email" src={linkedin} className="size-15" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
