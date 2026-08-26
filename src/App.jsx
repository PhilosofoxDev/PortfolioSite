import "tailwindcss";
import Header from "./Header.jsx";
import NavigationTabs from "./NavigationTabs.jsx";
import ProjectsGamePage from "./pages/ProjectsGamePage.jsx";

import { Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen align-top overscroll-x-none bg-linear-to-l to-warmWhite from-mainWhite">
      <Header />
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<ProjectsGamePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
