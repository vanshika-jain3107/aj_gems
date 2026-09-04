"use client";

import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("aj_gems_theme", "light");
  }, []);

  return null;
}
