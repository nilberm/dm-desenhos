import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Menu from "./components/layouts/menu/menu";
import Footer from "./components/layouts/footer/footer";
import Home from "./components/pages/Home/Home";
import Realistic from "./components/pages/Shop/realistic";

function App() {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desenhos/realista" element={<Realistic />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
