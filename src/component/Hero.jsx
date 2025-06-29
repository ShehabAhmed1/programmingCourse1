import { FaGraduationCap, FaUsers, FaTrophy, FaStar } from "react-icons/fa";
import { Decorative } from "./CourseAnnouncement";
import { LuArrowLeft } from "react-icons/lu";
import { useState } from "react";
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Decorative />
      <div className="absolute inset-0 bg-gradient-primary-accent-20-10"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="coding" patternUnits="userSpaceOnUse" width="50" height="50"><rect width="50" height="50" fill="%23007acc" opacity="0.1"/><text x="10" y="30" font-family="monospace" font-size="12" fill="%23007acc" opacity="0.3">{\'<}\'}/{\'>\'}</text></pattern></defs><rect width="100%" height="100%" fill="url(%23coding)"/></svg>\')',
          backgroundSize: "200px 200px",
        }}
      ></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <FaGraduationCap className="w-20 h-20 mx-auto text-primary mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            خارطة طريق البرمجة
            <span className="block text-primary mt-6">للشباب المبدع</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            رحلة شاملة من المبتدئ إلى المحترف - 4 مستويات اساسية ثم التخصص
            لتكوين مهندس برمجيات محترف
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
          <CtaButton isHovered={isHovered} setIsHovered={setIsHovered} />
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUsers className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">طالب</h3>
            <p className="text-gray-600">تفاعل مباشر مع متخصصين </p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaTrophy className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              48 أسبوع
            </h3>
            <p className="text-gray-600">برنامج تدريبي شامل</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaStar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.9/5</h3>
            <p className="text-gray-600">تقيمات واختبارات دورية</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaButton({ isHovered, setIsHovered }) {
  return (
    <a
      className={`group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 ${
        isHovered ? "scale-105 -translate-y-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdMByW-b9qgMOoRXImmBH9XBYLveBUFqjp2GXEm7PSA8ju9kg/viewform?usp=dialog"
      target="_blank"
    >
      <LuArrowLeft
        className={`w-5 h-5 transition-transform duration-300 ${
          isHovered ? "-translate-x-1" : ""
        }`}
      />
      <span>احجز مقعدك</span>

      {/* Button shine effect */}
      {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" /> */}
    </a>
  );
}
