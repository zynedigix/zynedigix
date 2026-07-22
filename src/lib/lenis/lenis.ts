/**
 * ============================================================================
 * ZyneDigix Lenis Instance
 * ============================================================================
 */

import Lenis from "lenis";

export const lenis = new Lenis({
  autoRaf: true,
  duration: 1.2,
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 1.2,
});