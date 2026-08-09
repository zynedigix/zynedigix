import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import "./FAQ.css";
import { faqData } from "./FAQData";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Side */}

        <motion.div
          className="faq-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="faq-label">FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Everything You
            <br />
            Need To Know
          </h2>

          <p>
            Have questions about our services, process or technologies? Here are
            the answers to the questions we receive most often.
          </p>

          {/* Crystal Placeholder */}

          <div className="faq-crystal">
            <div className="crystal-glow"></div>

            <div className="crystal-placeholder">◆</div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="faq-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={item.id}
                className={`faq-item ${isOpen ? "active" : ""}`}
                layout
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Plus size={22} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <div className="faq-answer">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
