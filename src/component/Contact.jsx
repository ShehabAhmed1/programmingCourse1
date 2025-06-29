import { IoLogoWhatsapp } from "react-icons/io";
import { CtaButton } from "./Hero";
import { useState } from "react";
export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-20  bg-primary">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          ساعد ابنك ليصبح مهندس برمجيات محترف!
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          استثمر في مستقبل طفلك اليوم - ابدأ رحلة التحول من المبتدئ إلى المحترف
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <CtaButton isHovered={isHovered} setIsHovered={setIsHovered} />
        </div>
      </div>
      <Whatsup />
    </section>
  );
}

/***** whatsup icon ******/
function Whatsup() {
  return (
    <a className="whatsup" href="https://wa.me/+201272073227?" target="_blank">
      <IoLogoWhatsapp />
    </a>
  );
}
