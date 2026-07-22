/**
 * ============================================================================
 * ZyneDigix Design System
 * Z-Index Tokens
 * ----------------------------------------------------------------------------
 * Semantic stacking order for the entire application.
 * Never hardcode z-index values in components.
 * ============================================================================
 */

export const zIndex = {
  /**
   * Base Layers
   */
  background: -10,

  canvas: 0,

  content: 1,

  /**
   * Layout
   */
  header: 100,

  navigation: 200,

  sidebar: 300,

  /**
   * Interactive Elements
   */
  dropdown: 400,

  sticky: 500,

  floating: 600,

  /**
   * Overlays
   */
  overlay: 700,

  drawer: 750,

  modal: 800,

  popover: 850,

  tooltip: 900,

  /**
   * Notifications
   */
  toast: 950,

  /**
   * Application States
   */
  loader: 1000,

  splash: 1050,

  debug: 1100,

  /**
   * Emergency
   */
  emergency: 9999,
} as const;

export default zIndex;