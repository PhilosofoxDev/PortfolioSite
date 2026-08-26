import "tailwindcss";
import Header from "./Header.jsx";
import NavigationTabs from "./NavigationTabs.jsx";
import StickyHeader from "./StickyHeader.jsx";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-linear-to-l to-warmWhite from-mainWhite">
      <Header />
      <StickyHeader />
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
