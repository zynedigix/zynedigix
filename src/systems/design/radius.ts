/**
 * ============================================================================
 * ZyneDigix Design System
 * Border Radius Tokens
 * ----------------------------------------------------------------------------
 * Single source of truth for all border radius values.
 * Never hardcode border-radius inside components.
 * ============================================================================
 */

export const radius = {
  /**
   * Base Radius Scale
   */
  none: "0px",

  xs: "2px",

  sm: "4px",

  md: "8px",

  lg: "12px",

  xl: "16px",

  "2xl": "20px",

  "3xl": "24px",

  "4xl": "32px",

  full: "9999px",

  /**
   * Components
   */

  button: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "9999px",
  },

  card: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  input: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },

  modal: {
    md: "24px",
    lg: "32px",
  },

  image: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },

  glass: {
    md: "20px",
    lg: "28px",
    xl: "36px",
  },

  avatar: {
    sm: "12px",
    md: "16px",
    lg: "20px",
    round: "9999px",
  },
} as const;

export default radius;