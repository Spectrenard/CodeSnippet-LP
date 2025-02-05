import Image from "next/image";
import { Syne } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/cs.png"
              alt="ES Web Logo"
              width={220}
              height={220}
              className="w-auto h-12"
            />
            <span
              className={`${syne.className} text-white font-bold text-lg md:text-2xl`}
            >
              Codesnippet
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>© 2025</span>
            <span className="text-zinc-400">Made by</span>
            <a
              href="https://elyesasahin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Spectre
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
