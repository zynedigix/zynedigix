import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

function hidePreloader() {
  try {
    const p = document.getElementById("preloader");
    if (!p) return;
    p.classList.add("preloader--hidden");
    setTimeout(() => {
      p.remove();
    }, 350);
  } catch (e) {
    // ignore
  }
}

window.addEventListener("app-ready", hidePreloader, { once: true });

// Fallback: if the app doesn't send a ready event, remove the preloader after 12 seconds.
const fallbackTimer = window.setTimeout(hidePreloader, 12000);
window.addEventListener("app-ready", () => window.clearTimeout(fallbackTimer), { once: true });

// Register service worker in production to enable basic caching and faster repeat loads
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        // console.log('Service worker registered.', reg);
      })
      .catch((err) => {
        // registration failed
      });
  });
}