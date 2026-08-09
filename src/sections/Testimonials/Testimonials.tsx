import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

import "./Testimonials.css";
import { testimonials } from "./TestimonialsData";

export default function Testimonials() {

  const [page, setPage] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  const [paused, setPaused] = useState(false);

  useEffect(() => {

    const resize = () => {

      setIsMobile(window.innerWidth < 768);

    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  const cardsPerView = isMobile ? 1 : 2;

  const totalPages = Math.ceil(
    testimonials.length / cardsPerView
  );

  const visibleTestimonials = useMemo(() => {

    const start = page * cardsPerView;

    return testimonials.slice(
      start,
      start + cardsPerView
    );

  }, [page, cardsPerView]);

  const nextSlide = () => {

    setPage((prev) => (prev + 1) % totalPages);

  };

  const prevSlide = () => {

    setPage((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );

  };

    // --------------------------------------------------
  // Auto Play
  // --------------------------------------------------

  useEffect(() => {

    if (paused) return;

    const timer = setInterval(() => {

      nextSlide();

    }, 5000);

    return () => clearInterval(timer);

  }, [page, paused, totalPages]);

  // --------------------------------------------------
  // Keyboard Navigation
  // --------------------------------------------------

  useEffect(() => {

    const handleKey = (event: KeyboardEvent) => {

      if (event.key === "ArrowRight") {

        nextSlide();

      }

      if (event.key === "ArrowLeft") {

        prevSlide();

      }

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      window.removeEventListener("keydown", handleKey);

    };

  }, [totalPages]);

  // --------------------------------------------------
  // Animation Variants
  // --------------------------------------------------

  const sliderVariants = {

    initial: {

      opacity: 0,

      x: 120,

    },

    animate: {

      opacity: 1,

      x: 0,

      transition: {

        duration: .65,

        ease: "easeOut",

      },

    },

    exit: {

      opacity: 0,

      x: -120,

      transition: {

        duration: .45,

        ease: "easeIn",

      },

    },

  };

  // --------------------------------------------------
  // Component Return
  // --------------------------------------------------

  return (

    <section
      className="testimonials-section"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <div className="testimonials-container">

        {/* Header */}

        <motion.div

          className="testimonials-header"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}
        >

          <span className="testimonials-label">

            CLIENT TESTIMONIALS

          </span>

          <h2>

            What Our Clients
            <br />
            Say About Us

          </h2>

          <p>

            Every successful project is built on trust,
            collaboration and a commitment to delivering
            exceptional digital experiences.

          </p>

        </motion.div>

                {/* Navigation */}

        <div className="testimonial-navigation">

          <button
            className="nav-button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="nav-button"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Slider */}

        <div className="testimonial-slider">

          <AnimatePresence mode="wait">

            <motion.div
              key={page}
              className="testimonial-track"
              variants={sliderVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >

              {visibleTestimonials.map((item) => (

                <motion.div
                  key={item.id}
                  className="testimonial-card"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: .3,
                  }}
                >

                  {/* Quote */}

                  <div className="quote-icon">

                    <Quote
                      size={24}
                      strokeWidth={2.4}
                    />

                  </div>

                  {/* Stars */}

                  <div className="testimonial-stars">

                    {Array.from({
                      length: item.rating,
                    }).map((_, index) => (

                      <Star
                        key={index}
                        size={16}
                        fill="currentColor"
                      />

                    ))}

                  </div>

                  {/* Review */}

                  <p className="testimonial-review">

                    "{item.review}"

                  </p>

                  {/* Footer */}

                  <div className="testimonial-footer">

                    <div className="testimonial-avatar">

                      {item.avatar}

                    </div>

                    <div className="testimonial-info">

                      <h4>

                        {item.name}

                      </h4>

                      <span>

                        {item.designation}

                      </span>

                      <small>

                        {item.company}

                      </small>

                    </div>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Pagination */}

        <div className="testimonial-pagination">

          {Array.from({ length: totalPages }).map((_, index) => (

            <button
              key={index}
              className={`pagination-dot ${
                page === index ? "active" : ""
              }`}
              onClick={() => setPage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />

          ))}

        </div>

      </div>

    </section>

  );

}