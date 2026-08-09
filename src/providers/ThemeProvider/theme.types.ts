/**
 * ============================================================================
 * ZyneDigix Theme Types
 * ============================================================================
 */

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeContextValue {
  /**
   * Current selected theme
   */
  theme: ThemeMode;

  /**
   * Actual theme after resolving system preference
   */
  resolvedTheme: "light" | "dark";

  /**
   * Change theme
   */
  setTheme: (theme: ThemeMode) => void;

  /**
   * Toggle light ↔ dark
   */
  toggleTheme: () => void;
}