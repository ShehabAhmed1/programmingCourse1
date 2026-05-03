import React from "react";
import "./Homepage.css";
import Hero from "../component/Hero";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import CourseAnnouncement from "../component/CourseAnnouncement";
import CourseRequirements from "../component/Requirements";
import Questions from "../component/Questions";
import MissionVision from "../component/MissionVision";
import TopStudents from "../component/TopStudents";

import Navbar from "../component/Navbar";

function Homepage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-cairo"
    >
      <Navbar />
      <Hero />
      <MissionVision />
      <CourseRequirements />
      <CourseAnnouncement />
      <TopStudents dir="ltr" />
      {/* <Plan /> */}
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
