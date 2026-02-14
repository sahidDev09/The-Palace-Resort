"use client";

import { useTheme } from "next-themes";

export function AnimatedGradientBG() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary warm blob — top left */}
      <div
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-60 blur-[120px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)"
            : "radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)",
          animation: "blob-float-1 25s ease-in-out infinite",
        }}
      />

      {/* Purple accent blob — top right */}
      <div
        className="absolute -top-[5%] -right-[10%] h-[500px] w-[500px] rounded-full opacity-50 blur-[100px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(99,70,190,0.16), transparent 70%)"
            : "radial-gradient(circle, rgba(147,130,220,0.10), transparent 70%)",
          animation: "blob-float-2 30s ease-in-out infinite",
        }}
      />

      {/* Blue accent blob — bottom center */}
      <div
        className="absolute -bottom-[15%] left-[20%] h-[550px] w-[550px] rounded-full opacity-50 blur-[110px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(30,64,175,0.14), transparent 70%)"
            : "radial-gradient(circle, rgba(96,165,250,0.10), transparent 70%)",
          animation: "blob-float-3 22s ease-in-out infinite",
        }}
      />

      {/* Secondary warm accent — center right */}
      <div
        className="absolute top-[40%] -right-[5%] h-[400px] w-[400px] rounded-full opacity-40 blur-[100px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)"
            : "radial-gradient(circle, rgba(245,158,11,0.07), transparent 70%)",
          animation: "blob-float-1 35s ease-in-out infinite reverse",
        }}
      />

      {/* Soft teal blob — bottom right */}
      <div
        className="absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full opacity-30 blur-[90px]"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(45,212,191,0.10), transparent 70%)"
            : "radial-gradient(circle, rgba(45,212,191,0.06), transparent 70%)",
          animation: "blob-float-2 28s ease-in-out infinite reverse",
        }}
      />

      {/* Subtle noise texture overlay for grain effect */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
