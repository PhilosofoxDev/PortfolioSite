import NavBar from "./NavBar";
import LightLogo from "./assets/images/NLLight.png";
import DarkLogo from "./assets/images/NLDark.png";
import StoneDark from "./assets/images/NLStone.png";
export default function Header() {
  return (
    <div className="bg-stone-900 align-top items-start overscroll-x-none w-screen border-b-3 border-orange-600">
      <header className="p-4 pb-6 w-screen">
        <div className="flex flex-col gap-4 items-center">
          {/* <div className="Logo flex items-center justify-start w-screen">
            <img src={DarkLogo} alt="Logo" className="size-25 ml-15 " />
          </div> */}
          <NavBar />
        </div>
      </header>
    </div>
  );
}
