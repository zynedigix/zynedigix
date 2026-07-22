/**
 * ============================================================================
 * Timeline Helpers
 * ============================================================================
 */

import { gsap } from "./gsap";

export function createTimeline() {
  return gsap.timeline();
}