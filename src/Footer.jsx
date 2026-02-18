import insta from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";

export default function Footer() {
  return (
    <div className="bg-black align-top items-start overscroll-x-none w-screen pt-5">
      <footer className="p-4 pb-6 w-screen">
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div className="Logo flex items-center justify-start">
            <a href="https://www.instagram.com/nathan.nikc/">
              <img alt="insta" src={insta} className="w-25" />
            </a>
            <img alt="linkedin" src={linkedin} className="size-15" />
          </div>
        </div>
      </footer>
    </div>
  );
}
