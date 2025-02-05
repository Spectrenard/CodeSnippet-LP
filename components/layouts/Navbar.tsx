"use client";
import Image from "next/image";
import LogoSvg from "@/public/assets/svg/logo.svg";
import Button2 from "../ui/Button2";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="w-full px-4 md:px-6 py-4 backdrop-blur-md bg-zinc-900 border rounded-full border-white/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[120px] md:w-[230px] flex items-center gap-2">
            <button
              onClick={() => scrollToSection("header")}
              className="text-white flex items-center"
            >
              <Image
                src={"/assets/cs.png"}
                alt="Logo"
                width={120}
                height={40}
                className="w-auto h-8 md:h-10"
                style={{ display: "block" }}
              />
              <span
                className={`${syne.className} text-white font-bold text-lg md:text-2xl`}
              >
                Codesnippet
              </span>
            </button>
          </div>

          {/* Menu burger pour mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 p-4 md:hidden bg-zinc-900 rounded-xl border border-white/10">
              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  Reviews
                </button>

                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-100 hover:text-white transition-colors py-2 text-center"
                >
                  F.A.Q
                </button>
                <a
                  href="https://code-snippet-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-full"
                >
                  <Button2
                    text="Lets see !"
                    className="w-full max-w-[200px] flex justify-center items-center"
                  />
                </a>
              </div>
            </div>
          )}

          {/* Menu desktop */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-12 mx-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>

            <button
              onClick={() => scrollToSection("reviews")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-100 hover:text-white transition-colors cursor-pointer"
            >
              F.A.Q
            </button>
          </div>

          {/* Bouton Contact (desktop) */}
          <a
            href="https://code-snippet-mocha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex justify-end"
          >
            <Button2 text="Access CodeSnippet" />
          </a>
        </div>
      </nav>
    </div>
  );
}
