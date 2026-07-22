/**
 * ============================================================================
 * Central GSAP Instance
 * ============================================================================
 */

import gsap from "gsap";

import { registerGSAPPlugins } from "./plugins";
import { gsapDefaults } from "./defaults";

registerGSAPPlugins();

gsap.defaults(gsapDefaults);

export { gsap };