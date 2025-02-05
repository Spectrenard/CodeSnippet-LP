"use client";
import { Syne } from "next/font/google";
import { CheckCircle, Clock, Award } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Services from "@/components/layouts/Services";
import Reviews from "@/components/layouts//Reviews";
import Faq from "@/components/layouts/Faq";
import Contact from "@/components/layouts/Contact";
import Footer from "@/components/layouts/Footer";
import Ripple from "@/components/ui/ripple";
import { StandaloneShineButton } from "@/components/ui/cta";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      id="header"
      className="min-h-screen bg-zinc-950 overflow-x-hidden relative overflow-fix"
    >
      {/* Conteneur global pour tous les effets de glow */}
      <div className=" inset-0 overflow-hidden pointer-events-none">
        {/* Nouveaux effets de glow derrière le CTA */}
      </div>
      <Navbar />
      <section className="mx-auto relative z-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Spotlight principal - toujours visible */}
          <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/60 rounded-full blur-[120px]" />
          {/* Spotlights secondaires - masqués sur mobile */}
          <div className="hidden sm:block absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-200/20 rounded-full blur-[90px]" />
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-600/15 rounded-full blur-[80px]" />
        </div>
        <div className=" mx-auto text-center relative max-sm:pt-20">
          <div className="py-12 lg:py-40 xl:py-44 2xl:py-64 space-y-6">
            <Ripple />
            <div className="inline-block px-4 py-1 bg-zinc-400/20 rounded-full border border-indigo-200/20 opacity-0 animate-[bounceIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              <AnimatedShinyText>🚀 Now Live on ProductHunt</AnimatedShinyText>
            </div>

            <h1
              className={`text-3xl md:text-6xl font-semibold mb-6 text-white ${syne.className}`}
            >
              <span className="block opacity-0 animate-header-slide-up-1 px-4">
                Save and Share Your
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-2 px-4">
                <span className="text-indigo-500">Code Snippets</span>
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-3">
                in <span className="text-indigo-500">One Click</span>
              </span>
            </h1>

            <p className="max-sm:text-xs text-md text-zinc-400 px-4 mb-12 mx-auto max-w-[750px] opacity-0 animate-header-scale-up">
              A modern platform for developers to organize, share, and discover
              code snippets. Streamline your workflow with powerful features
              designed for the modern developer.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-zinc-500 pt-8 pb-2">
              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.2s_forwards]">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-400">Instant Cloud Sync</span>
              </div>

              <span className="hidden md:inline text-zinc-400 opacity-0 animate-[fadeIn_0.3s_ease-out_1.3s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.4s_forwards]">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-400">Quick Share</span>
              </div>

              <span className="hidden md:inline text-zinc-400 opacity-0 animate-[fadeIn_0.3s_ease-out_1.5s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.6s_forwards]">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-zinc-400">Syntax Highlighting</span>
              </div>
            </div>

            <div className="opacity-0 animate-[zoomIn_0.5s_ease-out_1.8s_forwards] flex gap-4 justify-center">
              <a
                href="https://code-snippet-mocha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StandaloneShineButton>Try it now !</StandaloneShineButton>
              </a>
            </div>

            <div className="mt-8 text-sm text-zinc-400">
              Join 100+ developers who already use CodeSnippet
            </div>

            {/* Video Section */}
            <div className="relative w-full max-w-5xl mx-auto mt-12">
              <div className="aspect-video relative rounded-xl overflow-hidden  bg-white/50 backdrop-blur-sm">
                <video
                  className="w-full h-full absolute inset-0 object-cover"
                  autoPlay
                  loop
                  muted
                  controls
                >
                  <source src="/videos/cs.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Indigo Glow Effect */}
                <div className="absolute -inset-1 bg-indigo-500/20 blur-2xl -z-10 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-1/2 mx-auto h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-30"></div>

      <div className="w-1/2 mx-auto h-[0.5px] shadow-[0_0.1px_0_0_#27272a]"></div>
      <div id="features" className="relative">
        <div className=" inset-0 -z-10 overflow-hidden">
          {/* Spotlight principal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px]" />

          {/* Spotlight secondaire gauche */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-zinc-400/20 rounded-[60%_40%_70%_30%] rotate-12 blur-[100px]" />

          {/* Spotlight secondaire droit */}
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-600/20 rounded-[40%_60%_30%_70%] -rotate-12 blur-[90px]" />
        </div>
        <Services />
      </div>
      <div id="reviews" className="relative">
        <div className="inset-0 -z-10">
          {/* Spotlight principal blanc */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/25 rounded-full blur-[120px]" />

          {/* Spotlight indigo difforme en haut à droite */}
          <div className="absolute top-[20%] right-[15%] w-[450px] h-[350px] bg-indigo-500/55 rounded-[60%_40%_70%_30%] rotate-45 blur-[130px]" />

          {/* Spotlight indigo difforme en bas à gauche */}
          <div className="absolute bottom-[25%] left-[10%] w-[400px] h-[300px] bg-indigo-500/20 rounded-[30%_70%_40%_60%] -rotate-12 blur-[100px]" />

          {/* Petit spotlight indigo au centre */}
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[250px] bg-indigo-400/15 rounded-[45%_55%_40%_60%] rotate-90 blur-[90px]" />
        </div>
        <Reviews />
      </div>
      <div id="faq" className="relative">
        <div className="inset-0 -z-10">
          {/* Spotlight blanc principal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/50 rounded-full blur-[100px]" />

          {/* Spotlight indigo difforme */}
          <div className="absolute bottom-[20%] left-[15%] w-[400px] h-[300px] bg-indigo-300/25 rounded-[70%_30%_70%_30%] rotate-12 blur-[130px]" />

          {/* Deuxième spotlight indigo plus petit et difforme */}
          <div className=" absolute top-[25%] right-[10%] w-[300px] h-[250px] bg-indigo-300/30 rounded-[40%_60%_30%_70%] -rotate-12 blur-[120px]" />
        </div>
        <Faq />
      </div>
      <div id="contact" className="relative">
        <div className=" inset-0 -z-10 overflow-hidden">
          {/* Spotlight principal - plus subtil pour le formulaire */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-indigo-500/20 rounded-full blur-[130px]" />

          {/* Spotlight gauche - tons plus froids */}
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
