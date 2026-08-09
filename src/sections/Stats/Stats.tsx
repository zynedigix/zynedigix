import { motion } from "framer-motion";
import "./Stats.css";
import { stats } from "./StatsData";

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">

        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            className="stat-card"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <h2>
              {item.number}
              {item.suffix}
            </h2>

            <p>{item.title}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}