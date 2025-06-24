import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaTrophy,
  FaBookOpen,
  FaBullseye,
  FaBolt,
  FaLaptopCode,
  FaServer,
  FaUserShield,
} from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiArtificialIntelligence, GiBrain } from "react-icons/gi";

const curriculumLevels = [
  {
    id: 1,
    title: "التأسيس التقني والبرمجي",
    duration: "12 أسبوع = 3 شهور",
    mainprice: "3000 جنيه",
    alertprice: "1500 جنيه فقط",
    icon: "BookOpen",
    color: "bg-blue-500",
    summary:
      "يركز هذا المستوى بتعريف المتعلم بأساسيات استخدام الحاسوب ومفاهيم البرمجة، مع تعلم أساسيات لغة Python بأسلوب مبسط وتفاعلي.",
    outcome:
      "بنهاية هذا المستوى، سيكون المتعلم قادراً على كتابة برامج Python بسيطة وفهم المفاهيم البرمجية الأساسية.",
    topics: [
      "مكونات الحاسوب وأنظمة التشغيل (Windows / Linux)",
      "مبادئ الإنترنت والأمان الرقمي",
      "مقدمة إلى لغة Python",
      "المتغيرات وأنواع البيانات",
      "الإدخال والإخراج (input / print)",
      "المفاهيم المنطقية (and - or - not)",
      "الجمل الشرطية (if - elif - else)",
      "المصفوفات (lists)",
      "الحلقات (for - while)",
      "القواميس (dictionaries)",
      "الدوال (functions)",
    ],
    project:
      "مشروع: إنشاء آلة حاسبة بسيطة بلغة Python تتضمن التعامل مع المدخلات وإجراء العمليات الحسابية الأساسية.",
  },
  {
    id: 2,
    title: "البرمجة المتقدمة والبرمجة الكائنية",
    duration: "12 أسبوع = 3 شهور",
    mainprice: "3000 جنيه",
    alertprice: " ترقبوا مفاجأة خاصه للطلبه المتميزين",
    icon: "Code",
    color: "bg-green-500",
    summary:
      "ينتقل المتعلم في هذا المستوى إلى كتابة كود أكثر تنظيمًا باستخدام البرمجة الكائنية وفهم بنى البيانات المدمجة في Python.",
    outcome:
      "بنهاية هذا المستوى، سيكون المتعلم قادراً على كتابة كود منظم باستخدام OOP والتعامل مع أنواع بيانات مركبة.",
    topics: [
      "Tuples – Sets – Dictionaries",
      "الدوال المتقدمة (arguments, return, scope)",
      "مقدمة إلى البرمجة الكائنية OOP",
      "إنشاء الأصناف (Classes) والكائنات (Objects)",
      "الخصائص والوظائف داخل الكائنات",
      "الوراثة (Inheritance)",
      "الكبسلة (Encapsulation)",
      "التعددية الشكلية (Polymorphism)",
      "المُهيئات (__init__) والدوال الخاصة",
    ],
    project:
      "مشروع: بناء نظام مكتبة بسيط باستخدام OOP لإضافة وحذف وعرض الكتب وتسجيل استعارة وإرجاع الكتب.",
  },
  {
    id: 3,
    title: "هياكل البيانات",
    duration: "12 أسبوع = 3 شهور",
    mainprice: "3000 جنيه",
    alertprice: " ترقبوا مفاجأة خاصه للطلبه المتميزين",
    icon: "Database",
    color: "bg-purple-500",
    summary:
      "يتعلم المتعلم في هذا المستوى كيفية استخدام هياكل البيانات المختلفة في Python، وفهم كيفية تنظيم البيانات بطرق فعالة.",
    outcome:
      "بنهاية هذا المستوى، سيتمكن المتعلم من استخدام هياكل بيانات متعددة في حل المشكلات البرمجية.",
    topics: [
      "المراجعة على القوائم والمجموعات والقواميس",
      "Stacks (قائمة باستخدام append/pop)",
      "Queues (قائمة باستخدام pop(0))",
      "Linked Lists (يدويًا باستخدام الكائنات)",
      "Hash Tables (مفاهيم وفهم عمل dict)",
      "Trees – Binary Tree و Traversal",
      "Graphs – المفاهيم والتمثيل في Python",
      "طرق استكشاف الرسوم البيانية: BFS – DFS",
      "Recursion – المفاهيم والتطبيق",
      "أمثلة على هياكل البيانات في مشكلات واقعية",
    ],
    project:
      "مشروع: إنشاء تطبيق لإدارة المهام (To-Do List) يدعم التصنيف، البحث، وإعادة الترتيب باستخدام القوائم والمكدسات والطوابير.",
  },
  {
    id: 4,
    title: "الخوارزميات",
    duration: "12 أسبوع = 3 شهور",
    mainprice: "3000 جنيه",
    alertprice: " ترقبوا مفاجأة خاصه للطلبه المتميزين",
    icon: "Brain",
    color: "bg-red-500",
    summary:
      "يركز هذا المستوى على تحسين مهارات حل المشكلات من خلال دراسة الخوارزميات الأساسية والمتقدمة مع تحليل أدائها.",
    outcome:
      "بنهاية هذا المستوى، سيكون المتعلم قادراً على تصميم خوارزميات فعالة وتحليل الأداء الزمني والذاكري للكود.",
    topics: [
      "مقدمة في تحليل الأداء (Big O Notation)",
      "خوارزميات الفرز: Bubble – Selection – Insertion",
      "Merge Sort – Quick Sort – فهم تقسيم الحلول",
      "خوارزميات البحث: Linear – Binary",
      "التكرار مقابل العودية (Iteration vs Recursion)",
      "Backtracking – N-Queens – Maze Solver",
      "Greedy Algorithms – أمثلة على الحلول الطماعة",
      "Dynamic Programming – Fibonacci – Knapsack",
      "Divide and Conquer – مفاهيم تطبيقية",
    ],
    project:
      "مشروع: بناء محرك بحث بسيط يبحث في ملفات نصية باستخدام خوارزميات البحث وتحسين الأداء باستخدام خوارزميات الفرز وتحليل Big O.",
  },
];

const finalLevel = {
  id: 5,
  title: "التخصص",
  duration: "الفترة الزمنية تختلف بختلاف التخصص",
  mainprice: "",
  alertprice: "التكلفه تختلف بختلاف التخصص",
  icon: "Zap",
  color: "bg-indigo-500",
  topics: [
    {
      name: "Frontend Web",
      icon: <FaLaptopCode />,
      color: "bg-blue-500",
    },
    {
      name: "Backend Web",
      icon: <FaServer />,
      color: "bg-green-500",
    },
    {
      name: "Data Science",
      icon: <BiBarChartAlt2 />,
      color: "bg-yellow-500",
    },
    {
      name: "AI & ML",
      icon: <GiArtificialIntelligence />,
      color: "bg-purple-500",
    },
    {
      name: "Cybersecurity",
      icon: <FaUserShield />,
      color: "bg-red-500",
    },
  ],
  project: "مشروع تخرج مخصص حسب المسار المختار",
};
const iconComponents = {
  BookOpen: FaBookOpen,
  Code: FaCode,
  Database: FaDatabase,
  Brain: GiBrain,
  Target: FaBullseye,
  Zap: FaBolt,
  Award: FaTrophy,
};

export default function Plan() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".curriculum-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            رحلة التعلم المنظمة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اربع مستويات مدروسة بعناية لضمان التطور المستمر والتدرج من الأساسيات
            إلى التخصص
          </p>
        </div>

        <div className="space-y-8">
          {curriculumLevels.map((level) => (
            <Plancard
              key={level.id}
              level={level}
              visibleCards={visibleCards}
              renderIcon={renderIcon}
            />
          ))}

          <FinalLevel
            level={finalLevel}
            visibleCards={visibleCards}
            renderIcon={renderIcon}
          />
        </div>
      </div>
    </section>
  );
}

function Plancard({ level, visibleCards, renderIcon }) {
  return (
    <div
      id={`level-${level.id}`}
      className={`curriculum-card transition-all duration-700 transform ${
        visibleCards.has(`level-${level.id}`)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } hover:shadow-2xl border-none overflow-hidden bg-white rounded-xl`}
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className={`${level.color} p-8 lg:w-64 flex flex-col items-center justify-center text-white`}
        >
          <div className="mb-4">{renderIcon(level.icon)}</div>
          <h3 className="text-2xl font-bold text-center mb-2">
            المستوى {level.id}
          </h3>
          <div className="bg-white/20 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">{level.duration}</span>
          </div>
          <div className=" bg-emerald-400 px-8 py-2 rounded-4xl my-4 text-center">
            <h1 className="my-4 text-xl font-bold scaleing">
              عرض خاص للدفعه الاولي
            </h1>
            <span className="line-through decoration-red-500 text-xl">
              {level.mainprice}
            </span>
            <span className="text-xl font-bold"> = </span>
            <span className="text-xl font-bold"> {level.alertprice}</span>
          </div>
        </div>

        <div className="flex-1 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {level.title}
          </h3>
          <p className="leading-loose text-gray-700 mb-4">
            <span className="pl-2 text-primary font-bold">أهداف المستوى:</span>{" "}
            {level.summary} {level.outcome}
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              المحاور الرئيسية:
            </h4>
            <ul className="space-y-3">
              {level.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-accent-10 from-primary/20 to-accent/10 p-6 rounded-lg border-r-4 border-accent">
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-semibold text-gray-800">
                مشروع التخرج:
              </h4>
            </div>
            <p className="text-gray-700 font-medium">{level.project}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalLevel({ level, visibleCards, renderIcon }) {
  return (
    <div
      key={level.id}
      id={`level-${level.id}`}
      className={`FinalLevel curriculum-card transition-all duration-700 transform ${
        visibleCards.has(`level-${level.id}`)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } hover:shadow-2xl border-none overflow-hidden bg-white rounded-xl`}
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className={`${level.color} p-8 lg:w-64 flex flex-col items-center justify-center text-white`}
        >
          <div className="mb-4">{renderIcon(level.icon)}</div>
          <h3 className="text-2xl font-bold text-center mb-2">
            المستوى {level.id}
          </h3>
          <div className="bg-white/20 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold">{level.duration}</span>
          </div>
          <div className=" bg-emerald-400  p-4 rounded-4xl my-4 text-center">
            <span className="line-through decoration-red-500 text-xl">
              {level.mainprice}
            </span>
            <span className="text-xl font-bold"> {level.alertprice}</span>
          </div>
        </div>

        <div className="flex-1 p-8">
          <h3 className="CardTitle text-3xl font-bold text-gray-800 mb-4">
            {level.title}
          </h3>

          <div className="mb-6">
            <ul className="flex flex-col gap-4 items-center justify-between relative mt-10 md:flex-row md:gap-2">
              <div className="line"></div>
              {level.topics.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className={`relative flex gap-3 m-0 w-28 h-28 shrink-0 p-4 text-center rounded-full ${topic.color} flex-col justify-center items-center`}
                >
                  <span className="text-white text-2xl">{topic.icon}</span>
                  <span className="text-white leading-relaxed">
                    {topic.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="note my-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            عندما يصل الطالب إلى هذه المرحلة ويختار المسار الذي يرغب في دراسته
            يبدأ في خطة جديدة بمستويات جديدة تناسب هذا التخصص
          </p>

          <div className="bg-gradient-accent-10 from-primary/20 to-accent/10 p-6 rounded-lg border-r-4 border-accent">
            <div className="flex items-center gap-3 mb-2">
              <FaGraduationCap className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-semibold text-gray-800">
                مشروع التخرج:
              </h4>
            </div>
            <p className="text-gray-700 font-medium">{level.project}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
