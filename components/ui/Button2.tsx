interface Button2Props {
  text: string;
  className?: string;
}

export default function Button2({ text, className = "" }: Button2Props) {
  return (
    <button
      className={`relative text-sm inline-flex items-center gap-2 px-8 py-2.5 
      font-medium text-white
      bg-gradient-to-r from-indigo-600 to-indigo-400
      rounded-full
      ring-2 ring-white/10 
      overflow-hidden
      hover:ring-indigo-500/50 hover:scale-[1.02]
      hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
      transition-all duration-300
      before:absolute before:inset-0 
      before:translate-x-[40%] before:translate-y-[40%]
      before:w-40 before:h-40 
      before:bg-gradient-to-br before:from-white/20 before:to-transparent
      before:rounded-full before:blur-2xl
      before:-z-10 before:animate-pulse
      ${className}`}
    >
      <span>{text}</span>
    </button>
  );
}
