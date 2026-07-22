/**
 * ============================================================================
 * ZyneDigix Design System
 * Typography Tokens
 * ----------------------------------------------------------------------------
 * Single source of truth for typography.
 * Never hardcode font sizes, weights or line heights in components.
 * ============================================================================
 */

export const typography = {
  /**
   * --------------------------------------------------------------------------
   * Font Families
   * --------------------------------------------------------------------------
   */
  fontFamily: {
    primary:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    heading:
      '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',

    mono:
      '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  /**
   * --------------------------------------------------------------------------
   * Font Weights
   * --------------------------------------------------------------------------
   */
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  /**
   * --------------------------------------------------------------------------
   * Font Sizes
   * --------------------------------------------------------------------------
   */
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "30px",
    "3xl": "36px",
    "4xl": "48px",
    "5xl": "60px",
    "6xl": "72px",
    "7xl": "96px",
    "8xl": "120px",
    "9xl": "160px",
  },

  /**
   * --------------------------------------------------------------------------
   * Line Heights
   * --------------------------------------------------------------------------
   */
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.7,
    loose: 2,
  },

  /**
   * --------------------------------------------------------------------------
   * Letter Spacing
   * --------------------------------------------------------------------------
   */
  letterSpacing: {
    tighter: "-0.08em",
    tight: "-0.04em",
    normal: "0",
    wide: "0.03em",
    wider: "0.08em",
    widest: "0.15em",
  },

  /**
   * --------------------------------------------------------------------------
   * Display Typography
   * --------------------------------------------------------------------------
   */
  display: {
    hero: {
      fontSize: "160px",
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: "-0.06em",
    },

    xl: {
      fontSize: "120px",
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.05em",
    },

    lg: {
      fontSize: "96px",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.04em",
    },
  },

  /**
   * --------------------------------------------------------------------------
   * Headings
   * --------------------------------------------------------------------------
   */
  heading: {
    h1: {
      fontSize: "72px",
      fontWeight: 700,
      lineHeight: 1.1,
    },

    h2: {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: 1.1,
    },

    h3: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.15,
    },

    h4: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: 1.2,
    },

    h5: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: 1.3,
    },

    h6: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.35,
    },
  },

  /**
   * --------------------------------------------------------------------------
   * Body Text
   * --------------------------------------------------------------------------
   */
  body: {
    large: {
      fontSize: "20px",
      lineHeight: 1.8,
      fontWeight: 400,
    },

    medium: {
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
    },

    regular: {
      fontSize: "16px",
      lineHeight: 1.6,
      fontWeight: 400,
    },

    small: {
      fontSize: "14px",
      lineHeight: 1.5,
      fontWeight: 400,
    },

    tiny: {
      fontSize: "12px",
      lineHeight: 1.4,
      fontWeight: 400,
    },
  },

  /**
   * --------------------------------------------------------------------------
   * UI Elements
   * --------------------------------------------------------------------------
   */
  ui: {
    button: {
      fontSize: "16px",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },

    label: {
      fontSize: "14px",
      fontWeight: 500,
    },

    caption: {
      fontSize: "12px",
      fontWeight: 400,
    },

    overline: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },
} as const;

export default typography;