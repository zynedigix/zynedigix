/**
 * ============================================================================
 * Animation Utility Helpers
 * ============================================================================
 */

import { gsap } from "./gsap";

export function killTweens(target: gsap.TweenTarget) {
  gsap.killTweensOf(target);
}

export function delayedCall(
  delay: number,
  callback: () => void
) {
  return gsap.delayedCall(delay, callback);
}