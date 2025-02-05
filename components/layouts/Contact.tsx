import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import { StandaloneShineButton } from "@/components/ui/cta";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Contact() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative space-y-8">
        <h2
          className={`text-3xl md:text-5xl font-semibold text-stone-100 font-instrument ${
            syne.className
          }
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Start Sharing Your Code <br />
          <span className="text-indigo-400">With The World</span>
        </h2>

        <p
          className={`text-stone-400 text-lg max-w-2xl mx-auto
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Join our community of developers and start sharing your code snippets
          today. Simple, fast, and efficient.
        </p>
        <div className="opacity-0 animate-[zoomIn_0.5s_ease-out_1.8s_forwards] flex gap-4 justify-center">
          <a
            href="https://code-snippet-mocha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StandaloneShineButton>Try it now !</StandaloneShineButton>
          </a>
        </div>
      </div>
    </div>
  );
}
