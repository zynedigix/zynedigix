import React from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import projects from "../../data/portfolioData";
import "../../sections/Portfolio/Portfolio.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Project not found</h1>
        <p>
          The project you are looking for does not exist. Return to the <Link to="/portfolio">portfolio</Link>.
        </p>
      </main>
    );
  }

  // Use project's built asset path (imported) and prefix with production URL for OG
  const ogImage = project.image ? `${process.env.NODE_ENV === 'production' ? 'https://zyne.online' : ''}${project.image}` : 'https://zyne.online/og-image.jpg';

  return (
    <>
      <Seo
        title={`${project.title} — ZyneDigix`}
        description={project.description}
        path={`/portfolio/${project.slug}`}
        image={ogImage}
      />

      <main className="portfolio-detail" style={{ padding: 40 }}>
        <Link to="/portfolio">← Back to Portfolio</Link>

        <h1 style={{ marginTop: 16 }}>{project.title}</h1>
        <p style={{ color: '#6b7280' }}>{project.category}</p>

        <div style={{ marginTop: 24 }}>
          <img src={project.image} alt={project.title} style={{ maxWidth: '100%', borderRadius: 12 }} />
        </div>

        <p style={{ marginTop: 20 }}>{project.description}</p>

      </main>
    </>
  );
}
