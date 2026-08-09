import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ThemeContext } from "./ThemeContext";
import type {
  ThemeContextValue,
  ThemeMode,
} from "./theme.types";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const [resolvedTheme, setResolvedTheme] = useState<
    "light" | "dark"
  >("dark");

  useEffect(() => {
    if (theme === "system") {
      const media = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      const updateTheme = () => {
        setResolvedTheme(media.matches ? "dark" : "light");
      };

      updateTheme();

      media.addEventListener("change", updateTheme);

      return () => {
        media.removeEventListener("change", updateTheme);
      };
    }

    setResolvedTheme(theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme =
      resolvedTheme;
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}