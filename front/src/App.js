import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header affiché sur toutes les pages */}
        <HeaderNav />
        {/* Routes principales */}
        <Routes></Routes>
        <Footer /> {/* Footer affiché en bas de toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
