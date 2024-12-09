import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const Main = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Main;
