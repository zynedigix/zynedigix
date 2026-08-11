import { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";

import aiWebsiteImage from "../../assets/images/services/ai-website-development.jpg";
import interactive3dImage from "../../assets/images/services/3d-interactive-experiences.jpg";
import saasPdImage from "../../assets/images/services/saas-product-design.jpg";
import aiUgcImage from "../../assets/images/services/ai-ugc-marketing.jpg";
import uxuiImage from "../../assets/images/services/ux-ui-strategy.jpg";
import digitalGrowthImage from "../../assets/images/services/digital-growth.jpg";
import brandImage from "../../assets/images/services/brand-experience.jpg";
import futureTechImage from "../../assets/images/services/future-technologies.jpg";

const services = [
  {
    number: "01",
    title: "AI Website Development",
    image: aiWebsiteImage,
    description:
      "Next-generation AI-powered websites combining intelligent automation, premium UX and cinematic digital experiences.",
  },

  {
    number: "02",
    title: "3D Interactive \n Experiences",
    image: interactive3dImage,
    description:
      "Immersive 3D web environments with realistic visuals, motion design and interactive storytelling.",
  },

  {
    number: "03",
    title: "SaaS Product Design",
    image: saasPdImage,
    description:
      "Scalable SaaS interfaces designed with product strategy, usability and conversion-focused UX.",
  },

  {
    number: "04",
    title: "AI UGC Marketing",
    image: aiUgcImage,
    description:
      "AI-generated video campaigns, digital creators and performance-driven content experiences.",
  },

  {
    number: "05",
    title: "UX/UI Strategy",
    image: uxuiImage,
    description:
      "Research-driven interface systems that transform complex ideas into simple user journeys.",
  },

  {
    number: "06",
    title: "Digital Growth",
    image: digitalGrowthImage,
    description:
      "SEO, conversion optimization and digital strategies built for sustainable business growth.",
  },

  {
    number: "07",
    title: "Brand Experience",
    image: brandImage,
    description:
      "Premium digital identity systems creating memorable brand experiences across platforms.",
  },

  {
    number: "08",
    title: "Future Technologies",
    image: futureTechImage,
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

              {activeIndex === index && (
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </div>
              )}

              <h3 className="service-title">{service.title}</h3>

              <p className="service-text">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
