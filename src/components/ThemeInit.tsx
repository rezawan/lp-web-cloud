"use client";

import { useEffect } from "react";

const STORAGE_KEY = "theme";

export function ThemeInit() {
  useEffect(() => {
    const root = document.documentElement;

    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldUseDark = storedTheme ? storedTheme === "dark" : systemPrefersDark;

      root.classList.toggle("dark", shouldUseDark);
    } catch {
      root.classList.toggle("dark", false);
    }
  }, []);

  return null;
}
