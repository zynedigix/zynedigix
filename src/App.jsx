import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import "./styles/globals.css";

const PRELOAD_STORAGE_KEY = "zynedigix_preloaded_v1";

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  const {
    images,
    loadedPercentage,
    isReady,
    finalFrameIndex,
  } = useHeroPreloader();

  const [showGlobalLoader, setShowGlobalLoader] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return (
      window.sessionStorage.getItem(PRELOAD_STORAGE_KEY) !== "1"
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isReady) {
      window.sessionStorage.setItem(
        PRELOAD_STORAGE_KEY,
        "1"
      );

      setShowGlobalLoader(false);
    }
  }, [isReady]);

  return (
    <>
      <Helmet>
        <title>ZyneDigix — AI‑Powered Interactive 3D Digital Experience Studio</title>
        <meta name="description" content="ZyneDigix builds AI-powered interactive 3D websites, immersive digital experiences, and conversion-focused web products for businesses and startups." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zyne.online/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:image" content="https://zyne.online/og-image.jpg" />
        <link rel="canonical" href="https://zyne.online/" />

        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ZyneDigix",
          "url": "https://zyne.online/"
        }`}</script>
      </Helmet>
      {/* =====================================================
          GLOBAL LOADER
      ===================================================== */}

      {showGlobalLoader && !isReady && (
        <div
          className="global-loader"
          aria-live="polite"
          aria-label="Website loading"
        >
          <div className="global-loader__inner">

            <span className="global-loader__brand">
              ZyneDigix
            </span>

            <span className="global-loader__label">
              Loading Experience
            </span>

            <span className="global-loader__bar">
              <span
                className="global-loader__barFill"
                style={{
                  width: `${loadedPercentage}%`,
                }}
              />
            </span>

            <span className="global-loader__count">
              {String(loadedPercentage).padStart(2, "0")}%
            </span>

          </div>
        </div>
      )}

      {/* =====================================================
          MAIN WEBSITE
      ===================================================== */}

      <div
        className={
          isReady
            ? "site-shell"
            : "site-shell site-shell--hidden"
        }
      >
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

/* =========================================================
   LEGAL PAGE LAYOUT
========================================================= */

function LegalPageLayout({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <div className="site-shell">

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
}

/* =========================================================
   ROUTER
========================================================= */

function AppRoutes() {
  const location = useLocation();

  /*
   * When navigating to a new route, make sure the page
   * starts from the top.
   *
   * For homepage hash links such as #contact, the browser
   * can still handle the anchor normally.
   */

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <Routes>

      {/* ===================================================
          HOME
      =================================================== */}

      <Route
        path="/"
        element={<HomePage />}
      />

      {/* ===================================================
          PRIVACY POLICY
      =================================================== */}

      <Route
        path="/privacy-policy"
        element={
          <LegalPageLayout>
            <PrivacyPolicy />
          </LegalPageLayout>
        }
      />

      {/* ===================================================
          TERMS & CONDITIONS
      =================================================== */}

      <Route
        path="/terms-and-conditions"
        element={
          <LegalPageLayout>
            <TermsAndConditions />
          </LegalPageLayout>
        }
      />

      {/* ===================================================
          FALLBACK
      =================================================== */}

      <Route
        path="*"
        element={<HomePage />}
      />

    </Routes>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}