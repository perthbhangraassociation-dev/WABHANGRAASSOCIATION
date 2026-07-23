export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="texture"></div>
      <div className="container page-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
      </div>
    </section>
  );
}
