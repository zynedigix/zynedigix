export default function SectionHeading({ title, subtitle }) {
  return (
    <header className="section-heading">
      <h2>{title || "Section Title"}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
