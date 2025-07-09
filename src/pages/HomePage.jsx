import React from "react";
import "./HomePage.css";
import Hero from "../component/Hero";
import Plan from "../component/Plan";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import CourseAnnouncement from "../component/CourseAnnouncement";
import CourseRequirements from "../component/Requirements";
import Questions from "../component/Questions";
import MissionVision from "../component/MissionVision";
function Homepage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-cairo"
    >
      <Hero />
      <MissionVision />
      <CourseRequirements />
      <CourseAnnouncement />
      <Plan />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
