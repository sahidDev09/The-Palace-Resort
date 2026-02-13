"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
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
    <div className="flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white p-1 shadow-sm transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
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
                ? "text-amber-600 dark:text-amber-400"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            )}
            aria-label={`Set ${option.value} theme`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 rounded-full bg-zinc-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] dark:bg-zinc-800 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
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
