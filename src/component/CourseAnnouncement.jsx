import React, { useState, useEffect, useMemo } from "react";
import "./styles/CourseAnnouncement.css";
import {
  LuCalendar,
  LuUsers,
  LuClock,
  LuBookOpen,
  LuSparkles,
} from "react-icons/lu";

import {
  FaLayerGroup,
  FaHammer,
  FaSmileBeam,
  FaBookOpen,
  FaBriefcase,
  FaTags,
  FaGift,
  FaShieldAlt,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

import { BsPersonFill } from "react-icons/bs";

import { CtaButton } from "./Hero";

const courseFeatures = [
  {
    id: 1,
    title: "منهج تدريجي من الصفر للاحتراف",
    description:
      "يبدأ الكورس من أساسيات الحاسوب والبرمجة حتى التخصصات المتقدمة، مما يجعله مناسبًا تمامًا للمبتدئين.",
    icon: <FaLayerGroup />,
  },
  {
    id: 2,
    title: "مشاريع تطبيقية في كل مستوى",
    description:
      "كل مستوى يحتوي على مشروع عملي حقيقي يساعد المتعلم على التطبيق العملي والفهم العميق.",
    icon: <FaHammer />,
  },
  {
    id: 3,
    title: "تبسيط المفاهيم المعقدة",
    description:
      "شرح سهل ومبسط للمفاهيم البرمجية، مما يسهل الفهم خاصة على المبتدئين.",
    icon: <FaSmileBeam />,
  },
  {
    id: 9,
    title: "تعلم التفكير المنطقي وحل المشكلات",
    description:
      "تغطية شاملة للخوارزميات وأنماط التفكير البرمجي لحل مشكلات حقيقية.",
    icon: <FaBrain />,
  },
  {
    id: 4,
    title: "شمولية في المواضيع البرمجية",
    description:
      "يشمل الكورس البرمجة الكائنية، هياكل البيانات، الخوارزميات، والتخصصات الحديثة.",
    icon: <FaBookOpen />,
  },
  {
    id: 6,
    title: "سعر مناسب مقابل القيمة",
    description:
      "كورس شامل وعملي بسعر في متناول الجميع، مع خصومات حقيقية في بعض المستويات.",
    icon: <FaTags />,
  },
];

export default function CourseAnnouncement() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  // Set course start date
  const courseStartDate = useMemo(() => new Date("2025-07-11T17:00:00"), []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = courseStartDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [courseStartDate]);

  //convert Date object to new form يعني بدل ما يكون Sat Jun 29 2025، يطلع بشكل "السبت، 29 يونيو 2025" أو "Saturday, June 29, 2025" حسب اللغة اللي بتحددها.
  const formatDate = (date) => {
    return date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-green-50/50 to-indigo-50 overflow-hidden"
      dir="rtl"
    >
      <div className="main-container">
        <div className="CourseAnnouncement-content">
          <Decorative />
          <div className="relative z-10 flex flex-col md:flex-row items-center min-h-screen">
            <RightContent
              formatDate={formatDate}
              courseStartDate={courseStartDate}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
            />
            <LeftContent timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Decorative() {
  return (
    <>
      {/* Decorative Geometric Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute top-40 left-20 w-24 h-24 bg-green-200 rounded-lg opacity-30 animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-25 animate-spin"
        style={{ animationDuration: "8s" }}
      />
    </>
  );
}

function LeftContent({ timeLeft }) {
  return (
    <div className="lg:w-1/2 flex justify-center">
      {/* Left Visual Element (Arabic RTL) */}

      <div className="relative">
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50  w-full">
          {/* Countdown Timer */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span
                className="text-sm font-medium text-gray-600"
                style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
              >
                الدورة تبدأ خلال
              </span>
              <LuClock className="w-5 h-5 text-blue-500" />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "يوم", value: timeLeft.days },
                { label: "ساعة", value: timeLeft.hours },
                { label: "دقيقة", value: timeLeft.minutes },
                { label: "ثانية", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-xl p-3 mb-1 shadow-lg">
                    <span className="text-lg font-bold">
                      {item.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="text-xs text-gray-500 font-medium"
                    style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 text-center">
            <div
              className="text-xs text-gray-500 mb-2"
              style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
            >
              تقدم التسجيل
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-3/4 animate-pulse" />
            </div>
            <div
              className="text-xs text-gray-500 mt-1"
              style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
            >
              5 مقعد متبقي
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function RightContent({
  formatDate,
  courseStartDate,
  isHovered,
  setIsHovered,
}) {
  return (
    <div
      className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0"
      style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
    >
      {/* Right Content (Arabic RTL) */}

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg border border-blue-100">
        <LuSparkles className="w-4 h-4 text-blue-500" />
        <span className="text-sm font-medium text-gray-700">تسجيل محدود</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight pt-4">
        <span className="bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent leading-loose ">
          الدفعة الاولي تبدأ
        </span>
        <span className="text-gray-800">قريباً جداً</span>
      </h1>
      <h2 className="flex items-center justify-center gap-2 text-2xl mb-10 font-bold bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent">
        <BsPersonFill className="text-3xl text-green-500" />
        متبقي 5 مقاعد فقط ..!
      </h2>

      {/* FeatureSection */}
      <FeatureSection />

      {/* Start Date */}
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
        <LuCalendar className="w-6 h-6 text-blue-500" />
        <span className="text-xl font-semibold text-gray-700">
          المحاضرة الاولي: {formatDate(courseStartDate)}
        </span>
      </div>

      {/* Secondary Info */}

      {/* <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
        <LuClock className="w-5 h-5 text-blue-500" />
        <span className="text-xl font-semibold text-gray-700">
           اول محاضرة مجانا 
        </span>
      </div> */}

      <CtaButton isHovered={isHovered} setIsHovered={setIsHovered} />
    </div>
  );
}

function FeatureSection() {
  return (
    <div>
      <h3
        className="bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent text-xl lg:text-2xl font-bold mb-6"
        style={{ fontFamily: "'Tajawal', 'Arial', sans-serif" }}
      >
        ليه تشترك معانا؟{" "}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {courseFeatures.map((courseFeature) => (
          <li key={courseFeature.id} className="flex item-center mb-4 gap-2">
            <span className="text-sm text-blue-500 flex items-center justify-center ">
              {courseFeature.icon}
            </span>
            <h3 className="font-bold text-sm">{courseFeature.title}</h3>
            {/* <p className="text-gray-600">{courseFeature.description}</p> */}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
