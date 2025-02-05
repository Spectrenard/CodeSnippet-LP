import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";

interface StandaloneShineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const StandaloneShineButton = ({
  children,
  className,
  icon,
  ...props
}: StandaloneShineButtonProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <button
        {...props}
        className={cn(
          // Base styles
          "relative px-6 py-3 rounded-xl font-medium",
          "overflow-hidden transition-all duration-200", // Transition plus rapide ici
          "flex items-center gap-2",

          // Colors & Effects
          "bg-indigo-600 text-indigo-50",
          "hover:ring-2 hover:ring-offset-2 hover:ring-indigo-800/40",
          "hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-700",
          "shadow-lg shadow-indigo-900/20",

          // Dark mode
          "dark:bg-indigo-900/90 dark:text-indigo-100",
          "dark:hover:ring-indigo-600 dark:hover:ring-offset-indigo-950",
          "dark:hover:from-indigo-700 dark:hover:to-indigo-800",
          "dark:shadow-indigo-950/50",

          // Transform effect
          "hover:scale-[1.02] active:scale-[0.98]",
          "transform transition-transform duration-200",

          // Group for shine effect
          "group",

          className
        )}
      >
        {/* Shine effect */}
        <span
          className="absolute right-0 w-8 h-32 -mt-12 
          transition-all duration-500 transform translate-x-12 
          bg-white opacity-10 rotate-12 
          group-hover:-translate-x-96 ease
          dark:bg-indigo-300" // Animation plus longue avec -translate-x-96
        />

        {/* Button content */}
        <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide">
          {icon ? (
            icon
          ) : (
            <Wand2 className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          )}
          {children}
        </span>
      </button>
    </div>
  );
};
