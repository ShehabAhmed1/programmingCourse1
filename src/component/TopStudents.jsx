import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { students } from "../data/data.js";

const TopStudents = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = isLargeScreen
    ? Math.floor(students.length / 4)
    : students.length - 1;

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="main-container px-4 py-12" dir="ltr" id="top-students">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
          الطلاب المتميزين لهذا الشهر
        </h1>
        <p className="text-gray-600 text-lg">
          {" "}
          نتمني لهم دوام التوفيق والنجاح في مسيرتهم التعليمية.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Navigation */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200
            ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-xl hover:scale-110"
            }`}
        >
          <FiChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200
            ${
              currentIndex === maxIndex
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-xl hover:scale-110"
            }`}
        >
          <FiChevronRight size={20} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out py-5"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ⭐ Stars Component
const Stars = ({ level }) => (
  <div className="flex justify-center gap-1 mb-4" dir="ltr">
    {Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        size={16}
        className={`${
          i < level ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// 🎓 Student Card Component
const StudentCard = ({ student }) => {
  const Icon = student.icon;
  return (
    <div
      className="cursor-pointer w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2"
      dir="rtl"
    >
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-2xl h-full">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${student.bgColor} opacity-90`}
        />

        <div className="relative p-8 text-center text-white h-full flex flex-col">
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${student.badgeColor}`}
            >
              لقبك {student.title}
            </span>
          </div>

          {/* Avatar */}
          <div className="relative my-6">
            <div className="w-30 h-30 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:border-opacity-80">
              <img
                src={student.avatar}
                alt={student.name}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
              <Icon
                size={16}
                className={student.badgeColor
                  .replace("bg-", "text-")
                  .replace("-100", "-600")}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{student.name}</h3>
            <p className="text-white/90 font-medium mb-4 text-sm">
              {student.title}
            </p>
            <Stars level={student.level} />
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 inline-block">
              <span className="text-sm font-semibold">
                {student.points.toLocaleString()} Points
              </span>
            </div>
          </div>

          {/* Button */}
          {/* <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:animate-pulse">
            View Last Project
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TopStudents;
