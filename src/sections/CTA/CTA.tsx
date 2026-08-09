import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./CTA.css";
export default function CTA() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="cta-section" id="cta">
      <div className="cta-glow glow-1"></div>
      <div className="cta-glow glow-2"></div>
      <motion.div
        className="cta-container"
        initial={{
          opacity:0,
          y:60,
        }}
        whileInView={{
          opacity:1,
          y:0,
        }}
        viewport={{
          once:true,
          amount:.35,
        }}
        transition={{
          duration:.8,
        }}
      >
        <motion.span
          className="cta-label"
          initial={{
            opacity:0,
            y:20,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.15,
          }}
        >
          LET'S BUILD SOMETHING AMAZING
        </motion.span>
        <motion.h2
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.25,
          }}
        >
          Ready To Transform
          <br />
          Your Digital Presence?
        </motion.h2>
        <motion.p
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:.4,
          }}
        >
          Whether you're launching a startup, growing an
          established business or creating an immersive
          digital experience, ZyneDigix helps transform
          ideas into premium websites, AI-powered solutions
          and interactive experiences that leave a lasting
          impression.
        </motion.p>
        <motion.button
          className="cta-button"
          onClick={scrollToContact}
          whileHover={{
            scale:1.04,
            y:-3,
          }}
          whileTap={{
            scale:.98,
          }}
        >
          <span>
            Start Your Project
          </span>
          <ArrowRight
            size={22}
            strokeWidth={2.2}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}