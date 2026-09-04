"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("aj_gems_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("aj_gems_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      className="p-2 text-gold hover:text-gold/80 transition-transform duration-300 hover:scale-110 focus:outline-none"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 transition-all" />
      ) : (
        <Moon className="w-5 h-5 transition-all" />
      )}
    </button>
  );
}
