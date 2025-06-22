import React from "react";
import "./HomePage.css";
import Hero from "../component/Hero";
import Plan from "../component/Plan";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function Homepage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-cairo"
    >
      <Hero />
      <Plan />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
