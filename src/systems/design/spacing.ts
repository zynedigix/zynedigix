/**
 * ============================================================================
 * ZyneDigix Design System
 * Spacing Tokens
 * ----------------------------------------------------------------------------
 * Based on an 8px grid system with intermediate values for finer control.
 * Use these tokens for margin, padding, gap, inset, positioning, etc.
 * Never hardcode spacing values inside components.
 * ============================================================================
 */

export const spacing = {
  /**
   * Base Grid
   */
  px: "1px",
  0: "0px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  44: "176px",
  48: "192px",
  56: "224px",
  64: "256px",

  /**
   * Section Spacing
   */
  section: {
    xs: "48px",
    sm: "64px",
    md: "96px",
    lg: "128px",
    xl: "160px",
    xxl: "220px",
  },

  /**
   * Container Padding
   */
  container: {
    mobile: "20px",
    tablet: "32px",
    desktop: "48px",
    wide: "72px",
  },

  /**
   * Card Padding
   */
  card: {
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },

  /**
   * Button Padding
   */
  button: {
    xs: "8px 16px",
    sm: "10px 20px",
    md: "12px 24px",
    lg: "16px 32px",
    xl: "18px 40px",
  },

  /**
   * Input Padding
   */
  input: {
    sm: "10px 14px",
    md: "14px 18px",
    lg: "16px 22px",
  },

  /**
   * Icon Sizes
   */
  icon: {
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },

  /**
   * Navigation
   */
  navigation: {
    height: "80px",
    mobileHeight: "72px",
    itemGap: "32px",
    logoGap: "16px",
  },

  /**
   * Hero
   */
  hero: {
    topSpacing: "120px",
    contentGap: "32px",
    buttonGap: "20px",
  },

  /**
   * Border Width
   */
  border: {
    thin: "1px",
    medium: "2px",
    thick: "4px",
  },
} as const;

export default spacing;