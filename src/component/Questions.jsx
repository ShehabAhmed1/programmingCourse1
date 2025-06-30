import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Questions = () => {
  const [openItems, setOpenItems] = useState([]);
  const faqData = [
    {
      id: 1,
      question: "هل لازم أكون عندي خبرة سابقة في البرمجة؟",
      answer:
        "لا، الكورس يبدأ من الصفر تمامًا ومناسب للمبتدئين بدون أي خلفية سابقة.",
    },
    {
      id: 2,
      question: "أنا أقل من 13 سنة، هل ممكن أشارك؟",
      answer:
        "الكورس مصمم للفئة العمرية 13 سنة فأكثر، لكن يمكن قبول حالات استثنائية بعد تقييم مستوى الطالب.",
    },
    {
      id: 3,
      question: "هل الكورس مناسب للبنات؟",
      answer:
        "بالتأكيد، الكورس مناسب للجميع دون أي تفرقة، والتعلم متاح لجميع الفئات.",
    },
    {
      id: 4,
      question: "هل لازم أكون بعرف إنجليزي؟",
      answer:
        "مش شرط تتقن الإنجليزي، الشرح كله بالعربي، بس هنتعامل مع مصطلحات برمجية إنجليزية وهنشرحها ببساطة.",
    },
    {
      id: 5,
      question: "مدة الكورس قد إيه؟",
      answer:
        "كل مستوى مدته 12 أسبوع (حوالي 3 شهور)، والكورس مكوّن من 4 مستويات رئيسية بالإضافة إلى مرحلة التخصص، ولكل تخصص خطته ومدة دراسته.",
    },
    {
      id: 6,
      question: "ليه المسار طويل مش 6 شهور بس زي الباقي؟",
      answer:
        "عشان احنا قررنا إننا نبدأ من الصفر ونبني مبرمج صح قادر يفكر كمبرمج وينتقل من مجال لمجال، مش مجرد شخص بيكتب كود في مجال معين. وبالتالي كنا لازم نتعلم الأساسيات ونمشي الطريق صح. حاولنا نضغط المنهج بقدر المستطاع. ولو لاحظت، كلية حاسبات 4 سنين، والطالب بيتخصص في سنة 3، فمستحيل تضغط 4 سنين في 6 شهور.",
    },
    {
      id: 7,
      question: "إيه هي طريقة التدريس؟",
      answer:
        "الشرح تفاعلي مع المدرب يشمل فيديوهات، تدريبات عملية، مشاريع، واجتماعات متابعة دورية في كلا من الـ offline و الـ online.",
    },
    {
      id: 8,
      question: "هل فيه شهادات؟",
      answer:
        "نعم، بعد إنهاء كل مستوى وتقديم المشروع المطلوب، بيتم منح شهادة إتمام.",
    },
    {
      id: 9,
      question: "هل فيه خصومات؟",
      answer: "نعم، يتم الإعلان عن خصومات للطلبة المتميزين.",
    },
    {
      id: 10,
      question: "هل الكورس بيوصلني لمجال شغل معين؟",
      answer:
        "نعم، آخر مستوى هو التخصص، وبيمكنك تختار مسار زي Frontend، AI، Backend، وغيرها.",
    },
    {
      id: 11,
      question: "هل ممكن أبدأ أشتغل بعد الكورس؟",
      answer:
        "بعد التخصص هتكون مؤهل تبدأ تدريب عملي أو شغل حر حسب المسار اللي اخترته.",
    },
    {
      id: 12,
      question: "طب لما أخلص الأساسيات هكون مؤهل لإيه وبعرف أعمل إيه؟",
      answer:
        "هتكون قادر تكتب برامج حقيقية بلغة Python وتقدر تنتقل منها لاي لغة تانيه، تفهم المفاهيم الأساسية للبرمجة، وتحل مشكلات فعلية، وهتبدأ تكون جاهز تدخل في التخصصات المختلفة.",
    },
    {
      id: 13,
      question: "إيه هي التخصصات الموجودة وإيه معنى كل تخصص؟",
      answer: `التخصصات الموجودة حاليًا:

- Frontend: تصميم وبرمجة واجهات المواقع، زي اللي حضرتك بتتصفحه دلوقتي.
- Backend: بناء قواعد البيانات والمنطق الخلفي للتطبيقات، وده الجزء اللي بيخزن البيانات ويحافظ على أمان الموقع.
- Mobile: بناء تطبيقات الهاتف، زي كل البرامج اللي بتستخدمها على موبايلك.
- Data Science: تحليل البيانات واستخراج معلومات، وده مجال مهم جدًا في الشركات، خصوصًا في عصر الذكاء الاصطناعي.
- AI & ML: الذكاء الاصطناعي وتعلم الآلة، وهما من أقوى مجالات المستقبل.
- Cybersecurity: حماية الأنظمة والمواقع من الاختراقات وتأمين البيانات.

وجاري العمل على إضافة تخصصات تانية زي الArduino.`,
    },
    {
      id: 14,
      question:
        "الناس بتقول المجال صعب، هل هو صعب فعلًا؟ ومحتاج أعمل إيه عشان أبقى كويس؟",
      answer:
        "المجال مش صعب، لكنه محتاج صبر وممارسة مستمرة. كل ما تطبق أكتر، وتتمرن على المشكلات، هتلاقي الموضوع بيبقى أسهل. الالتزام هو السر.",
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50" dir="rtl">
      <div className="main-container">
        <div className="question-content">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                الأسئلة الشائعة
              </h2>
              <p className="text-lg text-gray-600  mx-auto">
                إجابات شاملة على الأسئلة الأكثر شيوعاً حول كورس البرمجة
                للمبتدئين
              </p>
            </div>

            <div className="space-y-4 ">
              {faqData.map((item) => {
                const isOpen = openItems.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="p-4  bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100  hover:outline-none hover:ring-2 hover:ring-blue-500"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 text-right flex items-center justify-between cursor-pointer "
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          {isOpen ? (
                            <FaChevronUp className="w-4 h-4 text-blue-600" />
                          ) : (
                            <FaChevronDown className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex-1 mr-4 text-right leading-relaxed">
                        {item.question}
                      </h3>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-6">
                        <div className="bg-blue-50 rounded-xl p-4 md:p-6 border-r-4 border-blue-400">
                          <pre className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-wrap  ">
                            {item.answer}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  لديك سؤال آخر؟
                </h3>
                <p className="text-gray-600 mb-6">
                  لا تتردد في التواصل معنا للحصول على إجابات مفصلة حول كورس
                  البرمجة
                </p>
                <a
                  href="https://wa.me/+201272073227?"
                  target="_blank"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
