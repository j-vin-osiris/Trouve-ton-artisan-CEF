import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArtisanPage from "./pages/ArtisanPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header affiché sur toutes les pages */}
        <HeaderNav />
        {/* Routes principales */}
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/artisans/:id" element={<ArtisanPage />} />
        </Routes>
        <Footer /> {/* Footer affiché en bas de toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
