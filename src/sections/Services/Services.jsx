import { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "AI Website Development",
    icon: "✦",
    description:
      "Next-generation AI-powered websites combining intelligent automation, premium UX and cinematic digital experiences.",
  },

  {
    number: "02",
    title: "3D Interactive Experiences",
    icon: "◈",
    description:
      "Immersive 3D web environments with realistic visuals, motion design and interactive storytelling.",
  },

  {
    number: "03",
    title: "SaaS Product Design",
    icon: "◎",
    description:
      "Scalable SaaS interfaces designed with product strategy, usability and conversion-focused UX.",
  },

  {
    number: "04",
    title: "AI UGC Marketing",
    icon: "▶",
    description:
      "AI-generated video campaigns, digital creators and performance-driven content experiences.",
  },

  {
    number: "05",
    title: "UX/UI Strategy",
    icon: "◇",
    description:
      "Research-driven interface systems that transform complex ideas into simple user journeys.",
  },

  {
    number: "06",
    title: "Digital Growth",
    icon: "↗",
    description:
      "SEO, conversion optimization and digital strategies built for sustainable business growth.",
  },

  {
    number: "07",
    title: "Brand Experience",
    icon: "∞",
    description:
      "Premium digital identity systems creating memorable brand experiences across platforms.",
  },

  {
    number: "08",
    title: "Future Technologies",
    icon: "⚡",
    description:
      "Exploring AI, automation and emerging technologies to build tomorrow's digital products.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="services-section" id="services">
      {/* Header */}

      <div className="services-header">
        <span className="services-eyebrow">What We Create</span>

        <h2 className="services-title">
          Digital Experiences
          <br />
          Beyond Imagination
        </h2>

        <p className="services-description">
          We combine AI, design, technology and immersive experiences to create
          digital products that feel futuristic, intelligent and unforgettable.
        </p>
      </div>

      {/* Accordion */}

      <motion.div
        className="services-accordion"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className={`service-card ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            layout
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <div className="service-glow" />

            <div className="service-content">
              <span className="service-number">{service.number}</span>

              <div className="service-icon">{service.icon}</div>

              <h3 className="service-title">{service.title}</h3>

              <p className="service-text">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
