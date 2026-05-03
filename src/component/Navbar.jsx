import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "الرئيسية", href: "#Hero" },
  { name: "من نحن", href: "#about" },
  { name: "شروط الالتحاق", href: "#requirements" },
  { name: "طلابنا", href: "#top-students" },
  { name: "الاسئلة", href: "#faq" },
  // { name: "ابدأ الآن", href: "#get-started", className: "bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* الشعار */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-600  to-indigo-600 bg-clip-text text-transparent">
          CodeJourney
        </div>

        {/* الروابط - Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`hover:text-indigo-600 ${
                  link.className ? link.className : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* زر البداية */}
        <div className="hidden md:block">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdMByW-b9qgMOoRXImmBH9XBYLveBUFqjp2GXEm7PSA8ju9kg/viewform?usp=dialog"
            target="_blank"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            ابدأ الآن
          </a>
        </div>

        {/* زر القائمة - موبايل */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* القائمة للموبايل */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block hover:text-indigo-600 ${
                    link.className ? link.className : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
