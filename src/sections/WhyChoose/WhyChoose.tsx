// src/sections/WhyChoose/WhyChoose.tsx

import { motion } from "framer-motion";
import "./WhyChoose.css";
import { whyChooseData } from "./WhyChooseData";

export default function WhyChoose() {
  return (
    <section className="why-section" id="why-choose">
      <div className="why-container">

        {/* Heading */}

        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="why-label">
            WHY CHOOSE ZYNEDIGIX
          </span>

          <h2>
            Digital Experiences
            <br />
            That Drive Results
          </h2>

          <p>
            We combine creativity, strategy, AI and cutting-edge
            technology to build immersive digital experiences
            that help businesses stand out and grow.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="why-grid">

          {whyChooseData.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                className={`why-card ${
                  index === 0 || index === 3 ? "large" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <div className="why-icon">
                  <Icon size={34} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}