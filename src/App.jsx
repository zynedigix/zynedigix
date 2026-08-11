import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./components/navigation";
import Seo from "./components/Seo/Seo";

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
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ProjectPage from "./pages/Portfolio/ProjectPage";

import "./styles/globals.css";
import seo from "./config/seo";

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

    const preloader = document.getElementById("preloader");
    const progressFill = preloader?.querySelector(".preloader-barFill");
    const progressText = preloader?.querySelector(".preloader-percent");
    const percent = Math.max(1, Math.min(100, loadedPercentage));

    if (progressFill) {
      progressFill.style.width = `${percent}%`;
    }

    if (progressText) {
      progressText.textContent = `${String(percent).padStart(2, "0")} %`;
    }

    if (isReady) {
      window.dispatchEvent(new Event("app-ready"));
    }
  }, [loadedPercentage, isReady]);

  return (
    <>
      <Seo
        title={"ZyneDigix — AI-Powered Interactive 3D Digital Experience Studio"}
        description={"AI-powered websites, immersive 3D experiences, UX/UI, SaaS product design, AI UGC marketing and digital growth solutions by ZyneDigix."}
        path={"/"}
        image={"https://zyne.online/og-image.jpg"}
      />
      {/* The initial preloader in index.html handles loading progress.
          The app remains hidden behind that overlay until the page is ready. */}

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

      <Route
        path="/portfolio"
        element={<PortfolioPage />}
      />

      <Route
        path="/portfolio/:slug"
        element={<ProjectPage />}
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