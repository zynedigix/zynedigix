// src/components/navigation/Navbar.jsx

import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/zynedigix-logo.svg";

import {
  NavMenu,
  MobileMenu,
  HamburgerButton,
  navLinks,
} from "./";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section[id]");

      let current = "#home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const showDarkNavbar = useMemo(() => {
    // On any non-home route, always use the dark translucent blurred navbar.
    if (location?.pathname && location.pathname !== "/") {
      return true;
    }

    // On the home route, use the active section detection
    // - when the `#home` hero is active -> transparent
    // - otherwise -> dark translucent blurred
    return active !== "#home";
  }, [location?.pathname, active]);

  const navbarClass = useMemo(() => {
    return showDarkNavbar
      ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,.3)]"
      : "bg-transparent";
  }, [showDarkNavbar]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-500 ${navbarClass}`}
      >
        <div className="mx-auto relative flex h-20 w-full max-w-[1440px] items-center justify-between px-8 xl:px-12">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src={Logo}
                alt="ZyneDigix"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex justify-center">
            <NavMenu links={navLinks} active={active} theme={scrolled ? "light" : "dark"} />
          </div>

          <div className="flex items-center justify-end gap-5">
            <a
              href="#contact"
              className="btn-primary hidden lg:inline-flex"
            >
              Let's Talk
            </a>

            <HamburgerButton open={mobileOpen} onClick={() => setMobileOpen((prev) => !prev)} />
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        active={active}
        links={navLinks}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}