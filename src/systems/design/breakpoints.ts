/**
 * ============================================================================
 * ZyneDigix Design System
 * Breakpoints
 * ----------------------------------------------------------------------------
 * Centralized responsive breakpoints and media query helpers.
 * ============================================================================
 */

export const breakpoints = {
  /**
   * Viewport Widths (px)
   */
  values: {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1920,
  },

  /**
   * Media Queries
   */
  media: {
    xs: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    "3xl": "(min-width: 1920px)",
  },

  /**
   * Max Width Queries
   */
  down: {
    xs: "(max-width: 479px)",
    sm: "(max-width: 639px)",
    md: "(max-width: 767px)",
    lg: "(max-width: 1023px)",
    xl: "(max-width: 1279px)",
    "2xl": "(max-width: 1535px)",
  },

  /**
   * Common Device Targets
   */
  device: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    laptop: "(min-width: 1024px) and (max-width: 1439px)",
    desktop: "(min-width: 1440px)",
    ultraWide: "(min-width: 1920px)",
  },
} as const;

export default breakpoints;