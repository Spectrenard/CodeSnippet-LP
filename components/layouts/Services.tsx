"use client";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Users, Zap, Search, FolderSearch } from "lucide-react";
import { cn } from "@/lib/utils";

import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import type { CSSProperties } from "react";

import {
  CodeAnimation,
  AnalyticsDashboard,
  WebAppAnimation,
  DesignPatterns,
} from "../animations/services-cards";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface ServiceItem {
  title: string;
  description: string;
  header: JSX.Element;
  icon: JSX.Element;
}

const items: ServiceItem[] = [
  {
    title: "Community Hub",
    description:
      "Discover, upvote, and share the best snippets from the community. Build your coding portfolio and learn from others.",
    header: <AnalyticsDashboard />,
    icon: <Users className="h-4 w-4 text-indigo-300" />,
  },
  {
    title: "Instant Save",
    description:
      "Add your snippets with one click and find them instantly. Auto-sync and version history keep your code safe and accessible.",
    header: <WebAppAnimation />,
    icon: <Zap className="h-4 w-4 text-indigo-300" />,
  },
  {
    title: "Quick Search",
    description:
      "Type a keyword and your snippet appears instantly. Advanced filters and smart suggestions make finding code effortless.",
    header: <DesignPatterns />,
    icon: <Search className="h-4 w-4 text-indigo-300" />,
  },
  {
    title: "Smart Organization",
    description:
      "Organize by categories, languages, and tags. Everything is structured, nothing gets lost.",
    header: <CodeAnimation />,
    icon: <FolderSearch className="h-4 w-4 text-indigo-300" />,
  },
];

export default function Services() {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen px-2 md:px-4 py-12 md:py-20 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <h2
            className={`text-3xl md:text-5xl px-4 font-semibold mb-6 md:mb-8 
              bg-gradient-to-r from-white via-white to-indigo-200 
              bg-clip-text text-transparent
              opacity-0 ${isInView ? "animate-fade-in-up" : ""} ${
              syne.className
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            What You Get{" "}
          </h2>

          <p
            className={`text-stone-400 text-lg max-w-2xl mx-auto mb-8
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Everything you need to manage and share your code snippets
            efficiently. Built by developers, for developers.
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item: ServiceItem, i: number) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                "transition-all duration-300 hover:scale-[1.02]",
                "bg-zinc-900 border",
                "hover:border-indigo-400/20 hover:shadow-lg",
                "hover:shadow-indigo-500/5",
                {
                  "md:col-span-2": i === 0 || i === 3,
                  "col-span-1": true,
                }
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
