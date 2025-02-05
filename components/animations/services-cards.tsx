import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import type { CSSProperties } from "react";
import {
  Save,
  Zap,
  Search,
  Users,
  Folder,
  Share2,
  Star,
  Clock,
} from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  trend: string;
}

interface ChartStyle extends CSSProperties {
  "--chart-height": string;
  "--delay": string;
}

// Community Hub Animation
export const AnalyticsDashboard = () => {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  const stats: StatItem[] = [
    { label: "Active Users", value: "12.4k", trend: "+28%" },
    { label: "Daily Shares", value: "2.8k", trend: "+34%" },
    { label: "Total Snippets", value: "45k", trend: "+22%" },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-[150px] bg-zinc-800 rounded-xl p-2 md:p-3"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-zinc-300">Community Activity</span>
          <div
            className={`h-1.5 w-1.5 rounded-full bg-green-400 ${
              isInView ? "animate-live-dot" : ""
            }`}
          />
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-2 mb-2">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`opacity-0 bg-zinc-800/50 rounded-lg p-1.5 md:p-2 ${
                isInView ? "animate-stats-fade-in" : ""
              }`}
              style={{ "--delay": `${i * 0.2}s` } as ChartStyle}
            >
              <div className="text-[10px] md:text-xs text-zinc-400">
                {stat.label}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs md:text-sm font-semibold text-zinc-200">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs text-green-400">
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-auto">
          {[
            { icon: Star, label: "Popular" },
            { icon: Clock, label: "Recent" },
            { icon: Users, label: "Following" },
            { icon: Share2, label: "Shared" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-indigo-400/10 rounded p-2 flex flex-col items-center gap-1 ${
                isInView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ "--delay": `${i * 0.1}s` } as ChartStyle}
            >
              <item.icon className="w-3 h-3 text-indigo-300" />
              <span className="text-[10px] text-zinc-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Instant Save Animation
export const WebAppAnimation = () => {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-[150px] bg-zinc-800 rounded-xl p-2 md:p-4"
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 border border-indigo-400/20 rounded-lg ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="h-8 bg-indigo-400/10 rounded-t-lg flex items-center px-3 gap-2">
            <Save className="w-4 h-4 text-indigo-300" />
            <span className="text-xs text-zinc-300">Instant Save</span>
            <div
              className={`ml-auto text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded ${
                isInView ? "animate-pulse" : ""
              }`}
            >
              Saved
            </div>
          </div>

          <div className="p-3 grid grid-cols-2 gap-2">
            <div
              className={`h-[25px] bg-indigo-400/10 rounded flex items-center justify-center gap-2 ${
                isInView ? "animate-fade-in" : ""
              }`}
              style={{ "--delay": "0.2s" } as ChartStyle}
            >
              <Zap className="w-3 h-3 text-indigo-300" />
              <span className="text-[10px] text-zinc-400">Auto-sync</span>
            </div>
            <div
              className={`h-[25px] bg-indigo-400/10 rounded flex items-center justify-center gap-2 ${
                isInView ? "animate-fade-in" : ""
              }`}
              style={{ "--delay": "0.3s" } as ChartStyle}
            >
              <Clock className="w-3 h-3 text-indigo-300" />
              <span className="text-[10px] text-zinc-400">Version History</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Smart Organization Animation
export const CodeAnimation = () => {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-full bg-zinc-800 rounded-xl overflow-hidden"
    >
      <div className="flex flex-col h-full p-3">
        <div className="flex items-center gap-2 mb-3">
          <Folder className="w-4 h-4 text-indigo-300" />
          <span className="text-xs text-zinc-300">Smart Organization</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Folder, label: "Categories" },
            { icon: Search, label: "Quick Find" },
            { icon: Share2, label: "Share" },
            { icon: Star, label: "Favorites" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-indigo-400/10 rounded p-2 flex items-center gap-2 ${
                isInView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ "--delay": `${i * 0.1}s` } as ChartStyle}
            >
              <item.icon className="w-3 h-3 text-indigo-300" />
              <span className="text-[10px] text-zinc-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Quick Search Animation
export const DesignPatterns = () => {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-full bg-zinc-800 rounded-xl p-3"
    >
      <div className="flex flex-col h-full gap-3">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-indigo-300" />
          <div
            className={`flex-1 bg-zinc-800/50 rounded h-7 flex items-center px-3 ${
              isInView ? "animate-pulse" : ""
            }`}
          >
            <span className="text-xs text-zinc-400">Search snippets...</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {[
            { label: "Quick Results", icon: Zap },
            { label: "Smart Filters", icon: Search },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-indigo-400/10 rounded p-1.5 flex items-center gap-1.5 ${
                isInView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ "--delay": `${i * 0.1}s` } as ChartStyle}
            >
              <item.icon className="w-3 h-3 text-indigo-300" />
              <span className="text-[10px] text-zinc-300">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
