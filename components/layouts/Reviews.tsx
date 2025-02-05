import { Syne } from "next/font/google";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reviews = [
  {
    name: "Alex Chen",
    content:
      "CodeSnippet has revolutionized how I manage my code snippets. The search functionality is lightning fast and the community features are fantastic. It's become an essential part of my daily workflow.",
    company: "Senior Developer",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Sarah Miller",
    content:
      "The ability to instantly save and organize code snippets has saved me countless hours. The community is super helpful and I've learned so much from other developers' shared snippets.",
    company: "Full Stack Engineer",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "David Kumar",
    content:
      "Best platform for managing code snippets I've ever used. The smart organization features and quick search are game-changers. Plus, the community aspect adds so much value.",
    company: "Software Architect",
    avatar: "/avatars/avatar-6.png",
  },
  {
    name: "Emma Wilson",
    content:
      "I love how easy it is to share snippets with my team. The version history and auto-sync features give me peace of mind. It's like GitHub Gists but with a much better UX.",
    company: "Tech Lead",
    avatar: "/avatars/avatar-4.png",
  },
  {
    name: "Marcus Zhang",
    content:
      "The community features are incredible. I've found solutions to complex problems through shared snippets. The search functionality is blazing fast and the UI is beautiful.",
    company: "Frontend Developer",
    avatar: "/avatars/avatar-5.png",
  },
  {
    name: "Julia Santos",
    content:
      "CodeSnippet has streamlined my development process. The smart categorization and instant search save me so much time. The community insights are an added bonus.",
    company: "Backend Developer",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Thomas Weber",
    content:
      "After trying various snippet managers, CodeSnippet stands out with its perfect balance of features. The community aspect makes it more than just a storage tool - it's a knowledge hub.",
    company: "DevOps Engineer",
    avatar: "/avatars/avatar-7.png",
  },
];

export default function Reviews() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative">
      <div className=" mx-auto relative">
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

        <div className="overflow-hidden relative">
          <div className="flex flex-col gap-y-8">
            <Marquee className="py-4" pauseOnHover>
              {reviews
                .slice(0, Math.ceil(reviews.length / 2))
                .map((review, index) => (
                  <div
                    key={index}
                    className="mx-4 p-6 relative
                    bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900
                    rounded-2xl 
                    w-[400px]
                    border border-zinc-800
                    ring-1 ring-indigo-500/20
                    hover:border-indigo-500/50 
                    hover:ring-indigo-500/40
                    hover:shadow-lg hover:shadow-indigo-500/10
                    transition-all duration-500
                    group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 via-transparent to-indigo-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl md:rounded-2xl" />

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3 md:mb-6">
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden shadow-lg shadow-indigo-500/20 flex-shrink-0">
                          <Image
                            src={review.avatar}
                            alt={`Avatar de ${review.name}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-indigo-400 font-medium text-xs md:text-sm truncate">
                            {review.name}
                          </p>
                          <p className="text-zinc-500 text-[10px] md:text-xs truncate">
                            {review.company}
                          </p>
                        </div>
                      </div>

                      <svg
                        className="w-5 h-5 md:w-8 md:h-8 text-indigo-500/20 mb-2 md:mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-stone-300 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                        {review.content}
                      </p>
                    </div>
                  </div>
                ))}
            </Marquee>

            <Marquee className="py-4" pauseOnHover reverse>
              {reviews
                .slice(Math.ceil(reviews.length / 2))
                .map((review, index) => (
                  <div
                    key={index}
                    className="mx-4 p-6 relative
                    bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900
                    rounded-2xl 
                    w-[400px]
                    border border-zinc-800
                    ring-1 ring-indigo-500/20
                    hover:border-indigo-500/50 
                    hover:ring-indigo-500/40
                    hover:shadow-lg hover:shadow-indigo-500/10
                    transition-all duration-500
                    group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 via-transparent to-indigo-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl md:rounded-2xl" />

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3 md:mb-6">
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden shadow-lg shadow-indigo-500/20 flex-shrink-0">
                          <Image
                            src={review.avatar}
                            alt={`Avatar de ${review.name}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-indigo-400 font-medium text-xs md:text-sm truncate">
                            {review.name}
                          </p>
                          <p className="text-zinc-500 text-[10px] md:text-xs truncate">
                            {review.company}
                          </p>
                        </div>
                      </div>

                      <svg
                        className="w-5 h-5 md:w-8 md:h-8 text-indigo-500/20 mb-2 md:mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-stone-300 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                        {review.content}
                      </p>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
