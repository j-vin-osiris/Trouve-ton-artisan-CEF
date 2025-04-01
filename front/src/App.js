import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArtisanPage from "./pages/ArtisanPage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header affiché sur toutes les pages */}
        <HeaderNav />
        {/* Routes principales */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisans/:name" element={<ArtisanPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
        </Routes>
        <Footer /> {/* Footer affiché en bas de toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
