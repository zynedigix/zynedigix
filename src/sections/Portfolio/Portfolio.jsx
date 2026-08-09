// src/sections/Portfolio/Portfolio.jsx

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Portfolio.css";

import aatralImage from "../../assets/images/portfolio/aatral.jpg";
import aurelixImage from "../../assets/images/portfolio/aurelix3d.jpg";
import caFinanceImage from "../../assets/images/portfolio/ca-finance.jpg";
import eshopImage from "../../assets/images/portfolio/eshop.jpg";
import pyroshieldImage from "../../assets/images/portfolio/pyroshield.jpg";

const projects = [
  {
    title: "Aatral Yoga",
    category: "Wellness Website",
    description:
      "Premium yoga and wellness website featuring glassmorphism, immersive layouts and a calm user experience.",
    image: aatralImage,
    tags: [
      "UI/UX",
      "Website",
      "Glassmorphism"
    ]
  },

  {
    title: "Aurelix 3D",
    category: "Interactive 3D",
    description:
      "A cinematic WebGL experience showcasing immersive storytelling with premium 3D interactions.",
    image: aurelixImage,
    tags: [
      "Three.js",
      "React",
      "GSAP"
    ]
  },

  {
    title: "CA Finance",
    category: "Fintech",
    description:
      "A clean finance dashboard designed for trust, clarity and intelligent business analytics.",
    image: caFinanceImage,
    tags: [
      "Dashboard",
      "Fintech",
      "SaaS"
    ]
  },

  {
    title: "E-Shop Computers",
    category: "3D Ecommerce",
    description:
      "A premium ecommerce experience with immersive visuals and conversion-focused design.",
    image: eshopImage,
    tags: [
      "Ecommerce",
      "3D",
      "React"
    ]
  },

  {
    title: "Pyroshield",
    category: "Industrial",
    description:
      "Corporate website crafted for an industrial safety company with modern branding and UX.",
    image: pyroshieldImage,
    tags: [
      "Corporate",
      "Branding",
      "Development"
    ]
  }
];

const Portfolio = () => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {

    sliderRef.current?.scrollBy({

      left: -430,

      behavior: "smooth"

    });

  };

  const scrollRight = () => {

    sliderRef.current?.scrollBy({

      left: 430,

      behavior: "smooth"

    });

  };

  return (

    <section
      className="portfolio-section"
      id="portfolio"
    >

      <div className="portfolio-header">

        <motion.span
          className="portfolio-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          FEATURED PROJECTS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Our Latest
          <br />
          Digital Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
        >
          Premium websites, AI products, SaaS platforms and
          immersive 3D digital experiences crafted by ZyneDigix.
        </motion.p>

      </div>

      <div className="portfolio-container">

        <button
          className="portfolio-arrow left"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="portfolio-wrapper"
          ref={sliderRef}
        >

          <div className="portfolio-track">

            {projects.map((project, index) => (

              <motion.article
                key={project.title}
                className="portfolio-card"
                initial={{
                  opacity: 0,
                  y: 80
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: .7,
                  delay: index * .12
                }}
                whileHover={{
                  y: -12
                }}
                viewport={{ once: true }}
              >
            <div className="portfolio-image">
                                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />

                  <div className="image-overlay"></div>

                </div>

                <div className="portfolio-content">

                  <span className="category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

        <div className="portfolio-mobile-navigation">
          <button
            className="portfolio-arrow left"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="portfolio-arrow right"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <button
          className="portfolio-arrow right desktop-arrow"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </button>

      </div>

    </section>

  );

};

export default Portfolio;