import { FaGraduationCap } from "react-icons/fa";
import banner from "../img/circular_shehab4.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <FaGraduationCap className="w-12 h-12 mx-auto text-primary mb-4" />
          <p className="text-gray-400 mt-2">نبني مستقبل التكنولوجيا معاً</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          <div>
            <h4 className="font-semibold mb-4">تواصل معنا</h4>
            <p className="text-gray-400">
              البريد الإلكتروني: sa2315144@gmail.com
            </p>
            <p className="text-gray-400">الهاتف: 01272073227</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">تابعنا</h4>
            <div className="flex justify-center gap-4">
              <button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                فيسبوك
              </button>
              <button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                تويتر
              </button>
              <button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                لينكد إن
              </button>
            </div>
          </div>
          <Figure />
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">© 2024 . جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
/** information in contact + img at the end */
function Figure() {
  return (
    <div className="contact-info">
      <figure>
        <img className="banner" src={banner} alt="banner" />
      </figure>
    </div>
  );
}
