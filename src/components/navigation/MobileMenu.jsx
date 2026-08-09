import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({
  open,
  links,
  active,
  onClose,
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 flex h-[100svh] w-[80vw] max-w-[560px] flex-col bg-black/70 px-8 pb-10 pt-24 shadow-2xl backdrop-blur-2xl"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute right-5 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors duration-300 hover:bg-[#16C6B7] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#16C6B7]"
              onClick={onClose}
            >
              <X size={20} aria-hidden="true" />
            </button>

            <nav className="flex-1">
              <ul className="space-y-8">
                {links.map((link, index) => {
                  const isActive = active === link.href;

                  return (
                    <motion.li
                      key={link.id}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.35,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={onClose}
                        className={`block text-[30px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-[#16C6B7]"
                            : "text-white hover:text-[#16C6B7]"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.a
              href="#contact"
              onClick={onClose}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-12 flex h-14 items-center justify-center rounded-2xl bg-[#16C6B7] text-[16px] font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Let's Talk
            </motion.a>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}