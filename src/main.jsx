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

// Remove the inline preloader added in index.html once the app mounts.
function removePreloader() {
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

// Run removal on next tick so the UI has a chance to paint
requestAnimationFrame(() => {
  setTimeout(removePreloader, 50);
});

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