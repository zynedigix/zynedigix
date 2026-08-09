import { motion } from "framer-motion";

export default function HamburgerButton({
  open,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-xl transition-all duration-300 hover:border-[#16C6B7] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#16C6B7] md:hidden ${className}`}
    >
      <div className="relative h-5 w-6">
        <motion.span
          animate={
            open
              ? {
                  rotate: 45,
                  y: 8,
                  backgroundColor: "#16C6B7",
                }
              : {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "#111111",
                }
          }
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 h-[2px] w-full rounded-full"
        />

        <motion.span
          animate={
            open
              ? {
                  opacity: 0,
                  x: 10,
                }
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-[#111111]"
        />

        <motion.span
          animate={
            open
              ? {
                  rotate: -45,
                  y: -8,
                  backgroundColor: "#16C6B7",
                }
              : {
                  rotate: 0,
                  y: 0,
                  backgroundColor: "#111111",
                }
          }
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-[18px] h-[2px] w-full rounded-full"
        />
      </div>
    </button>
  );
}