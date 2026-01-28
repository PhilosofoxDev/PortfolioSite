import NavBar from "./NavBar";
export default function Header() {
  return (
    <div className="bg-stone-900 align-top items-start overscroll-x-none w-screen">
      <header className="p-4 pb-6 w-screen">
        <div className="grid grid-cols-2 gap-4 justify-between">
          <div className="Logo flex items-center justify-start">
            <h1 className="text-white text-xl font-bold pl-5 font-EmblemaOne">
              Nathan Lomnicky 'Logo here soon'
            </h1>
          </div>
          <NavBar />
        </div>
      </header>
    </div>
  );
}
