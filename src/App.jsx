import "tailwindcss";
import Header from "./Header.jsx";
import NavigationTabs from "./NavigationTabs.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import BedmimeOverviewPage from "./pages/ProjectOverviews/BedmimeOverview.jsx";

import { Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";

function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-linear-to-l to-warmWhite from-mainWhite">
      <Header />
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bedmime" element={<BedmimeOverviewPage />} />
      </Routes>
      {/*<Footer />*/}
    </main>
  );
}

export default App;
