import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Components from "./pages/Components";
import Docs from "./pages/Docs";
import Features from "./pages/Features";
import Themes from "./pages/Themes";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/components" element={<Components />} />
        <Route path="/features" element={<Features />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
