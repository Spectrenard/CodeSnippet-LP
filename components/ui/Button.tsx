import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "shine";
}

export default function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-xl font-medium text-sm";

  const variants = {
    default: [
      "bg-zinc-900/10 text-zinc-50",
      "hover:bg-zinc-800/20",
      "dark:bg-zinc-800/90 dark:text-zinc-100",
      "transition-all duration-200",
      "shadow-lg shadow-zinc-900/20",
      "dark:shadow-zinc-950/50",
    ],
    shine: [
      "overflow-hidden",
      "bg-zinc-900/10 text-zinc-50",
      "hover:ring-2 hover:ring-offset-2 hover:ring-zinc-800/40",
      "hover:bg-gradient-to-r hover:from-zinc-800 hover:to-zinc-700",
      "dark:bg-zinc-800/90 dark:text-zinc-100",
      "dark:hover:ring-zinc-600 dark:hover:ring-offset-zinc-950",
      "dark:hover:from-zinc-700 dark:hover:to-zinc-800",
      "group hover:scale-[1.02] active:scale-[0.98]",
    ],
  };

  return (
    <button {...props} className={cn(baseStyles, variants[variant], className)}>
      {variant === "shine" && (
        <span
          className="absolute right-0 w-8 h-32 -mt-12 
          transition-all duration-500 transform translate-x-12 
          bg-white opacity-10 rotate-12 
          group-hover:-translate-x-96 ease
          dark:bg-zinc-300"
        />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
