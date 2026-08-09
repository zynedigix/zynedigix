import { motion } from "framer-motion";
import "./Process.css";
import { processSteps } from "./ProcessData";

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">

        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="process-label">
            OUR PROCESS
          </span>

          <h2>
            From Idea
            <br />
            to Digital Success
          </h2>

          <p>
            We transform ideas into modern digital experiences
            through a structured creative process.
          </p>
        </motion.div>

        <div className="timeline">

          {processSteps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.id}
                className={`timeline-item ${index % 2 ? "top" : "bottom"}`}
                initial={{
                  opacity: 0,
                  y: index % 2 ? -60 : 60,
                  scale: .9
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                viewport={{
                  once: true,
                  amount: .4
                }}
                transition={{
                  delay: index * .12,
                  duration: .6
                }}
              >

                {index !== processSteps.length - 1 && (
                  <div className="timeline-line" />
                )}

                <div className="timeline-dot" />

                <div className="process-card">

                  <div className="process-icon">
                    <Icon size={30} />
                  </div>

                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.subtitle}</p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}