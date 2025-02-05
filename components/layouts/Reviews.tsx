import { Syne } from "next/font/google";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import { Tweet } from "react-tweet";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Remplacer par vos vrais IDs de tweets
const tweets = [
  "1884669572092919822",
  "1884651629682610686",
  "1885042741865820596",
  "1884676410897306082",
  "1887145896564896030",
  "1884651384382816521",
  "1885249317356630382",
  "1884664490853081224",
  "1885109600547946830",
];

export default function Reviews() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative">
      <div className="mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 mb-4 md:mb-6 
              bg-gradient-to-r from-indigo-500/10 to-indigo-500/20 
              rounded-full border border-indigo-500/20
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-indigo-400 text-xs md:text-sm font-medium">
              Developer Community
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl px-4 font-semibold mb-6 md:mb-8 
              bg-gradient-to-r from-white via-white to-indigo-200 
              bg-clip-text text-transparent
              opacity-0 ${isInView ? "animate-fade-in-up" : ""} ${
              syne.className
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Trusted by Developers
          </h2>
          <p
            className={`text-zinc-400 px-4 max-sm:text-xs text-sm md:text-lg leading-relaxed max-w-2xl mx-auto
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Join thousands of developers who trust CodeSnippet to manage, share,
            and discover code snippets. Our community drives innovation through
            collaboration.
          </p>
        </div>

        <div
          className={`opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {tweets.slice(0, 10).map((tweetId, index) => (
              <Tweet key={index} id={tweetId} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
