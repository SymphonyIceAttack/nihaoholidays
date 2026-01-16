"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
      <Moon className="h-4 w-4 absolute transition-transform duration-300 rotate-90 scale-0" />
      {isDark && (
        <Sun className="absolute h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
}
