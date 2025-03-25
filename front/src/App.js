import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header affiché sur toutes les pages */}
        <HeaderNav />

        {/* Routes principales */}
        <Routes></Routes>

        {/* Footer affiché sur toutes les pages */}
      </div>
    </Router>
  );
}

export default App;
