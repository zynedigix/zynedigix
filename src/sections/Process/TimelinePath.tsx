// src/sections/Process/TimelinePath.tsx

import { motion } from "framer-motion";

interface TimelinePathProps {
  progress: number;
}

export default function TimelinePath({
  progress,
}: TimelinePathProps) {
  return (
    <svg
      className="timeline-svg"
      viewBox="0 0 1700 470"
      preserveAspectRatio="none"
    >
      {/* Animated Line */}

      <motion.path
        d="
M40 235

H180

Q220 235 220 275

V385

Q220 425 260 425

H430

Q470 425 470 385

V85

Q470 45 510 45

H680

Q720 45 720 85

V385

Q720 425 760 425

H930

Q970 425 970 385

V85

Q970 45 1010 45

H1180

Q1220 45 1220 85

V385

Q1220 425 1260 425

H1430

Q1470 425 1470 385

V235

H1660
"
        fill="none"
        stroke="#101010"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{
          duration: 0.25,
          ease: "linear",
        }}
      />

      {/* Start Node */}

      <motion.circle
        cx="40"
        cy="235"
        r="7"
        fill="#ffffff"
        stroke="#101010"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.35,
        }}
      />

      {/* End Node */}

      <motion.circle
        cx="1660"
        cy="235"
        r="7"
        fill="#ffffff"
        stroke="#101010"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={{
          scale: progress >= 0.99 ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
      />
    </svg>
  );
}