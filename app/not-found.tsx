import Link from "next/link";
import Particles from "@/components/ui/particles";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-white via-zinc-50 to-zinc-100 min-h-svh relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#18181b"
      />

      {/* Effets de lumière adaptés */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-400/30 via-indigo-300/40 to-indigo-400/30 blur-[130px] rounded-full" />
        <div className="absolute right-1/4 top-2/3 w-[400px] h-[300px] bg-gradient-to-bl from-zinc-500/30 via-zinc-400/40 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 h-svh flex flex-col items-center justify-center relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-zinc-900/5 rounded-full border border-zinc-900/10">
            <AnimatedShinyText>Error 404</AnimatedShinyText>
          </div>

          <h1 className="text-8xl font-bold text-zinc-900 font-instrument">
            404
          </h1>

          <h2 className="text-3xl text-zinc-800 font-instrument mb-6">
            Page Not Found
          </h2>

          <p className="text-zinc-600 max-w-md mx-auto mb-12">
            The page you're looking for seems to have been teleported to another
            dimension.
          </p>

          <Link href="/" className="inline-block">
            <StandaloneShineButton>Return Home</StandaloneShineButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
