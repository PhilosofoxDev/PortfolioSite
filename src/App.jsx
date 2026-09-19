import "tailwindcss";
import Header from "./Header.jsx";
import NavigationTabs from "./NavigationTabs.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import DesignPage from "./pages/DesignPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import BedmimeOverviewPage from "./pages/ProjectOverviews/BedmimeOverview.jsx";
import BlinkOverview from "./pages/ProjectOverviews/BlinkOverview.jsx";
import LondonOverview from "./pages/ProjectOverviews/LondonOverview.jsx";
import OverdraftOverview from "./pages/ProjectOverviews/OverdraftOverview.jsx";

import { Routes, Route, HashRouter } from "react-router-dom";
import Footer from "./Footer.jsx";

function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-linear-to-l to-warmWhite from-mainWhite">
      <Header />
      {/*IF ROUTING BREAKS AGAIN, WRAP THIS IN HASHROUTER*/}
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Game Paths */}
        <Route path="/games/bedmime" element={<BedmimeOverviewPage />} />
        <Route path="/games/overdraft" element={<OverdraftOverview />} />
        {/* Design Paths */}
        <Route path="/design/blink" element={<BlinkOverview />} />
        <Route path="/design/ldi" element={<LondonOverview />} />
      </Routes>
      {/*<Footer />*/}
    </main>
  );
}

export default App;
