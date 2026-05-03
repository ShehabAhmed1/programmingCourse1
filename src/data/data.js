import { FiStar, FiAward, FiCode, FiTrendingUp, FiZap } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

import Abdelrahman_samy from "../assets/img/Abdelrahman_samy.png";
import Mohamed_emam from "../assets/img/Mohamed_emam.png";
import mohamed_sameh from "../assets/img/mohamed_sameh.png";
import youssef_mohamed from "../assets/img/youssef_mohamed.png";
import mohaz_mohamed from "../assets/img/mohaz_mohamed.png";

export const students = [
  {
    id: 4,
    name: "يوسف محمد",
    title: "المبرمج الصاعد",
    avatar: youssef_mohamed,
    level: 5,
    points: 100,
    bgColor: "from-green-500 to-emerald-600",
    icon: FiZap,
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: 1,
    name: "عبدالرحمن اسامة",
    title: "الموهوب",
    avatar: Abdelrahman_samy,
    level: 5,
    points: 100,
    bgColor: "from-purple-500 to-pink-500",
    icon: FiTrendingUp,
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 5,
    name: "معاذ محمد",
    title: "البطل",
    avatar: mohaz_mohamed,
    level: 5,
    points: 100,
    bgColor: "from-blue-500 to-indigo-600",
    icon: FiZap,
    badgeColor: "bg-blue-100 text-blue-800",
  },
];
