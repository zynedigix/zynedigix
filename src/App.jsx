import { useEffect, useState } from "react";
import { Navbar } from "./components/navigation";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Stats from "./sections/Stats";
import WhyChoose from "./sections/WhyChoose";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import useHeroPreloader from "./sections/Hero/useHeroPreloader";

const PRELOAD_STORAGE_KEY = "zynedigix_preloaded_v1";

export default function App() {
  const { images, loadedPercentage, isReady, finalFrameIndex } = useHeroPreloader();
  const [showGlobalLoader, setShowGlobalLoader] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.sessionStorage.getItem(PRELOAD_STORAGE_KEY) !== "1";
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isReady) {
      window.sessionStorage.setItem(PRELOAD_STORAGE_KEY, "1");
      setShowGlobalLoader(false);
    }
  }, [isReady]);

  return (
    <>
      {(showGlobalLoader && !isReady) && (
        <div className="global-loader" aria-live="polite" aria-label="Website loading">
          <div className="global-loader__inner">
            <span className="global-loader__brand">ZyneDigix</span>
            <span className="global-loader__label">Loading Experience</span>
            <span className="global-loader__bar">
              <span className="global-loader__barFill" style={{ width: `${loadedPercentage}%` }}></span>
            </span>
            <span className="global-loader__count">{String(loadedPercentage).padStart(2, "0")}%</span>
          </div>
        </div>
      )}

      <div className={isReady ? "site-shell" : "site-shell site-shell--hidden"}>
        <Navbar />

        <main>
          <Hero
            images={images}
            loadedPercentage={loadedPercentage}
            isReady={isReady}
            finalFrameIndex={finalFrameIndex}
          />

          <About />

          <Services />

          <Portfolio />

          <Process />

          <Stats />

          <WhyChoose />

          <Testimonials />

          <FAQ />

          <CTA />

          <Contact />

          <Footer />
        </main>
      </div>
    </>
  );
}
 