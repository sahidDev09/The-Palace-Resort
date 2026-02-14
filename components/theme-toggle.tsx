"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ isScrolled = false }: { isScrolled?: boolean }) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-10 w-[120px]" />;

  const options = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
  ];

  return (
    <div className={cn(
      "flex items-center gap-0.5 rounded-full p-1 backdrop-blur-xl transition-all",
      resolvedTheme !== "dark" && isScrolled
        ? "border border-zinc-600/40 bg-zinc-300/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-zinc-400 hover:bg-zinc-200/80"
        : "border border-white/10 bg-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:border-white/20 hover:bg-white/15 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] dark:hover:border-white/15 dark:hover:bg-white/10"
    )}>
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value;

        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cn(
              "group relative flex h-8 flex-1 items-center justify-center gap-2 rounded-full px-3 text-xs font-medium transition-all focus:outline-none",
              isActive
                ? "text-amber-500 dark:text-amber-400 bg-zinc-900"
                : resolvedTheme !== "dark" && isScrolled
                  ? "text-zinc-500 hover:text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            )}
            aria-label={`Set ${option.value} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.1)] dark:bg-white/10 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.2)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className="relative z-10 h-3.5 w-3.5" />
            
          </button>
        );
      })}
    </div>
  );
}
