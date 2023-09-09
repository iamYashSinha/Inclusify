import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
