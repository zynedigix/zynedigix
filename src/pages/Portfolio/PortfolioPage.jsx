import React from "react";
import Seo from "../../components/Seo/Seo";
import Portfolio from "../../sections/Portfolio/Portfolio";

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio — ZyneDigix"
        description="Featured projects: AI-powered websites, immersive 3D experiences and product design crafted by ZyneDigix."
        path="/portfolio"
        image="https://zyne.online/og-image.jpg"
      />

      <main>
        <Portfolio />
      </main>
    </>
  );
}
