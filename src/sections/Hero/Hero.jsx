import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 286;
const FINAL_FRAME_INDEX = FRAME_COUNT - 1;

export default function Hero({ images, loadedPercentage, isReady, finalFrameIndex }) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(0);

  const drawFrame = (frameIndex, immediate = false) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const image = images[frameIndex] || images[frameRef.current] || images[0];

    if (!image) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);

    if (!width || !height) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    const imgWidth = image.naturalWidth || image.width;
    const imgHeight = image.naturalHeight || image.height;

    if (!imgWidth || !imgHeight) {
      return;
    }

    const scale = Math.max(width / imgWidth, height / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

    if (immediate) {
      frameRef.current = frameIndex;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return undefined;
    }

    const fitCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      if (!width || !height) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }

      const img = images[frameRef.current] || images[0];

      if (!img) {
        return;
      }

      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      if (!imgWidth || !imgHeight) {
        return;
      }

      const scale = Math.max(width / imgWidth, height / imgHeight);
      const drawWidth = imgWidth * scale;
      const drawHeight = imgHeight * scale;
      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    fitCanvas();

    const resizeObserver = new ResizeObserver(() => {
      fitCanvas();
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [images]);

  useEffect(() => {
    if (!images.length || images.length < FRAME_COUNT) {
      return undefined;
    }

    const frame = images[0];

    if (frame) {
      frameRef.current = 0;
      drawFrame(0, true);
    }

    return undefined;
  }, [images, loadedPercentage]);

  useEffect(() => {
    if (!isReady || !images[FINAL_FRAME_INDEX] || !sectionRef.current || !stickyRef.current || images.length < FRAME_COUNT) {
      return undefined;
    }

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: stickyRef.current,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const clampedProgress = Math.min(Math.max(self.progress, 0), 1);
        const frameIndex = Math.round(clampedProgress * FINAL_FRAME_INDEX);
        const safeFrameIndex = Math.max(0, Math.min(FINAL_FRAME_INDEX, frameIndex));
        const imageCandidate = images[safeFrameIndex];

        if (imageCandidate) {
          frameRef.current = safeFrameIndex;
          drawFrame(safeFrameIndex, true);
        }

        if (clampedProgress >= 1 && images[FINAL_FRAME_INDEX]) {
          frameRef.current = FINAL_FRAME_INDEX;
          drawFrame(FINAL_FRAME_INDEX, true);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isReady, images, finalFrameIndex]);

  useEffect(() => {
    if (!isReady) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isReady]);

  return (
    <section
      id="home"
      className="hero-section"
      ref={sectionRef}
      aria-label="ZyneDigix cinematic hero experience"
    >
      <div className="hero-sticky" ref={stickyRef}>
        <div className="hero-sequence">
          <canvas
            ref={canvasRef}
            aria-label="ZyneDigix cinematic image sequence"
          />
        </div>

        <div className="hero-screen-scrim" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-copy">
            <h1>
              We Turn Intelligence Into Digital Experiences.
            </h1>

            <p>
              AI-powered websites, immersive 3D experiences, and digital marketing solutions engineered to transform ideas into unforgettable digital experiences.
            </p>

            <a href="#contact" className="hero-cta">
              Explore Our Universe <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}