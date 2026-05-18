import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* CTA banner */}
          <div className="footer-cta bg-white border-4 border-black rounded-3xl py-8 px-6 md:py-10 md:px-12 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-1">
                Ready to work together?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Get in touch and let's deliver something great.
              </p>
            </div>
            <a
              href="mailto:oluwatofunmisin4@gmail.com"
              className="bg-black text-white hover:bg-black/80 rounded-xl px-8 py-4 font-semibold text-base md:text-lg flex items-center gap-2 shrink-0"
            >
              <Mail className="w-5 h-5" />
              oluwatofunmisin4@gmail.com
            </a>
          </div>

          {/* Footer columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="footer-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/Tofunmi-2.PNG"
                    alt="Oluwatofunmisin Akinwumi"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">
                  Oluwatofunmisin Akinwumi
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Project Manager | PRINCE2 Practitioner | Based in Germany.
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:oluwatofunmisin4@gmail.com"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/testimony-akinwumi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a
                    href="mailto:oluwatofunmisin4@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    oluwatofunmisin4@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">📍</span>
                  <span>Germany</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Oluwatofunmisin Akinwumi · All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
