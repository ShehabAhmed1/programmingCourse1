import React, { useState, useEffect } from "react";
import { FaEye, FaCode, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
const MissionVision = () => {
  const [activeSection, setActiveSection] = useState("mission");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const missionPoints = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "تعليم البرمجة بطريقة مبسطة",
      description: "نقدم محتوى تعليمي متدرج وسهل الفهم للمبتدئين",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "مجتمع داعم ومتفاعل",
      description: "نبني مجتمعاً يدعم المتعلمين في رحلتهم التطويرية",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "مشاريع عملية وتطبيقية",
      description: "نركز على التطبيق العملي لترسيخ المفاهيم البرمجية",
    },
  ];

  const visionPoints = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "منصة عالمية رائدة",
      description: " أن نكون الخيار الاول لتعليم البرمجة باللغة العربية",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "مليون مطور عربي",
      description: "تخريج مليون مطور عربي مؤهل لسوق العمل التقني",
    },
    {
      icon: <TbTargetArrow className="w-6 h-6" />,
      title: "سد الفجوة التقنية",
      description: "المساهمة في سد الفجوة التقنية في المنطقة العربية",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-indigo-100 text-gray-900"
      dir="rtl"
    >
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl flex items-center justify-center font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent">
            CodeJourney
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            رحلتك في عالم البرمجة تبدأ هنا - نحو مستقبل تقني مشرق
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/100 flex justify-center backdrop-blur-lg rounded-2xl p-2 border border-white/60">
            <button
              onClick={() => setActiveSection("mission")}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeSection === "mission"
                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                  : "text-gray-700 hover:text-blue-500 hover:bg-white/20"
              }`}
            >
              <TbTargetArrow className="w-5 h-5" />
              <span className="font-semibold text-lg">رسالتنا</span>
            </button>
            <button
              onClick={() => setActiveSection("vision")}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                activeSection === "vision"
                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                  : "text-gray-700 hover:text-blue-500 hover:bg-white/20"
              }`}
            >
              <FaEye className="w-5 h-5" />
              <span className="font-semibold text-lg">رؤيتنا</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto">
          {activeSection === "mission" && (
            <div className="transition-all duration-500 opacity-100">
              {/* Mission Statement */}
              <div className="text-center mb-16">
                <div className="flex items-center gap-4 justify-center">
                  <div className=" scale-out inline-flex items-center justify-center w-15 h-15 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-8 shadow-xl">
                    <TbTargetArrow className="w-10 h-10 text-white " />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent">
                    رسالتنا
                  </h2>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  نهدف إلى تمكين المبتدئين والمطورين الطموحين من إتقان البرمجة
                  من خلال رحلة ممتدة شامله، تجمع بين المحتوى العالي الجودة
                  والتطبيق العملي والمجتمع الداعم، لنجعل رحلة التعلم ممتعة
                  ومثمرة للجميع لننشئ جيل من المبرمجين القادرين علي مواكبة العصر
                  و تعلم مجالت اخري بسهوله
                </p>
              </div>

              {/* Mission Points */}
              <div className="grid md:grid-cols-3 gap-8">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/70 hover:border-green-400 transition-all duration-500 hover:scale-105 shadow-xl"
                  >
                    <div className="flex  items-center justify-center w-16 h-16 text-white bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "vision" && (
            <div className="transition-all duration-500 opacity-100">
              {/* Vision Statement */}
              <div className="text-center mb-16">
                <div className="flex items-center gap-4 justify-center">
                  <div className="scale-out inline-flex items-center justify-center w-15 h-15 bg-gradient-to-r from-green-400 to-indigo-400 rounded-full mb-8 shadow-xl">
                    <FaEye className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl leading-loose font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 bg-clip-text text-transparent">
                    رؤيتنا
                  </h2>
                </div>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  نتطلع إلى أن نكون الخيار الاول في تعليم البرمجة باللغة
                  العربية، مكانا متخصصا يأخذ بيد الطلاب من الصفر حتي التخصص
                  لبناء جيل جديد من المطورين العرب المبدعين الذين يساهمون في
                  تطوير التكنولوجيا وحل التحديات التقنية في المنطقة العربية
                  والعالم.
                </p>
              </div>

              {/* Vision Points */}
              <div className="grid md:grid-cols-3 gap-8">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/70 hover:border-blue-400 transition-all duration-500 hover:scale-105 shadow-xl"
                  >
                    <div className="flex items-center  text-white justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-indigo-400 rounded-full mb-6">
                      {point.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">
              ابدأ رحلتك البرمجية اليوم
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              انضم إلى آلاف المطورين الذين بدأوا رحلتهم معنا
            </p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 shadow-lg">
              ابدأ التعلم الآن
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MissionVision;
