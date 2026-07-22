/**
 * ============================================================================
 * ZyneDigix Design System
 * Glassmorphism Tokens
 * ----------------------------------------------------------------------------
 * Reusable glass styles for navigation, cards, modals and overlays.
 * This file stores ONLY values/tokens, not CSS classes.
 * ============================================================================
 */

export const glass = {
  /**
   * Blur
   */
  blur: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    xxl: "40px",
  },

  /**
   * Background Opacity
   */
  background: {
    light: "rgba(255,255,255,0.04)",
    soft: "rgba(255,255,255,0.06)",
    medium: "rgba(255,255,255,0.08)",
    strong: "rgba(255,255,255,0.12)",
    heavy: "rgba(255,255,255,0.18)",
  },

  /**
   * Border
   */
  border: {
    subtle: "rgba(255,255,255,0.08)",
    soft: "rgba(255,255,255,0.12)",
    medium: "rgba(255,255,255,0.18)",
    strong: "rgba(255,255,255,0.24)",
    highlight: "rgba(255,255,255,0.32)",
  },

  /**
   * Backdrop Saturation
   */
  saturation: {
    low: "120%",
    normal: "150%",
    high: "180%",
  },

  /**
   * Ready-to-use Presets
   */
  preset: {
    navigation: {
      blur: "20px",
      background: "rgba(15,18,24,0.55)",
      border: "rgba(255,255,255,0.10)",
    },

    card: {
      blur: "18px",
      background: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.10)",
    },

    floatingCard: {
      blur: "24px",
      background: "rgba(255,255,255,0.08)",
      border: "rgba(255,255,255,0.14)",
    },

    modal: {
      blur: "32px",
      background: "rgba(10,12,18,0.72)",
      border: "rgba(255,255,255,0.16)",
    },

    overlay: {
      blur: "40px",
      background: "rgba(5,5,5,0.60)",
      border: "rgba(255,255,255,0.08)",
    },
  },
} as const;

export default glass;