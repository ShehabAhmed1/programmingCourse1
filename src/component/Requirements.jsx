import React from "react";
import {
  FaCalendarAlt,
  FaBookOpen,
  FaLaptop,
  FaBullseye,
} from "react-icons/fa";

const CourseRequirements = () => {
  const requirements = [
    {
      id: 1,
      icon: <FaCalendarAlt className="w-6 h-6 text-blue-600" />,
      text: "أن يكون عمر المشترك 13 سنة أو أكثر.",
    },
    {
      id: 2,
      icon: <FaBookOpen className="w-6 h-6 text-green-600" />,
      text: "مستوي جيد جدا في القراءة والكتابة باللغة العربية و مستوي مقبول في اللغة الإنجليزية.",
    },
    {
      id: 3,
      icon: <FaLaptop className="w-6 h-6 text-purple-600" />,
      text: "جهاز كمبيوتر أو لابتوب ومصدر أساسي للإنترنت.",
    },
    {
      id: 4,
      icon: <FaBullseye className="w-6 h-6 text-orange-600" />,
      text: "أن يمتلك الطالب رغبة حقيقية في تعلّم البرمجة، وأن يكون مستعدًا للدراسة بشكل يومي، نظرًا لأن البرمجة تحتاج إلى تركيز، وممارسة منتظمة لتحقيق التقدم الفعلي.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-100/65"
      dir="rtl"
    >
      <div className="main-container ">
        <div className="requirements-content">
          <div className="mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                شروط الالتحاق بالكورس
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Requirements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {requirements.map((requirement, index) => (
                <div
                  key={requirement.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:scale-105 transform"
                >
                  <div className="flex items-start gap-6">
                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 flex-1"></div>
                      </div>

                      <p
                        className="text-gray-700 text-lg leading-relaxed flex gap-4"
                        style={{
                          lineHeight: "1.8",
                        }}
                      >
                        {/* Icon Container */}
                        <span className="bg-gray-50 rounded-full p-2 w-fit h-fit text-sm shadow-md">
                          {requirement.icon}
                        </span>
                        {requirement.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom decoration */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span
                  className="text-gray-600 font-medium"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  ابدأ رحلتك في عالم البرمجة
                </span>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseRequirements;
