// src/sections/Process/components/ProcessCard.tsx

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  number: string;
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  index: number;
  active: boolean;
}

export default function ProcessCard({
  number,
  title,
  subtitle,
  Icon,
  index,
  active,
}: ProcessCardProps) {
  const isTop = index % 2 !== 0;

  return (
    <motion.div
      className={`process-card ${isTop ? "top" : "bottom"} ${
        active ? "active" : ""
      }`}
      initial={{
        opacity: 0,
        scale: 0.85,
        y: isTop ? -50 : 50,
      }}
      animate={{
        opacity: active ? 1 : 0.35,
        scale: active ? 1 : 0.9,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
    >
      <div className="process-card-glow" />

      <div className="process-number">
        {number}
      </div>

      <div className="process-icon">
        <Icon size={34} strokeWidth={2} />
      </div>

      <h3 className="process-title">
        {title}
      </h3>

      <p className="process-subtitle">
        {subtitle}
      </p>
    </motion.div>
  );
}