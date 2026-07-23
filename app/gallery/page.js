import PageHero from "../components/PageHero";

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments that move us." text="A growing visual archive of performances, events, teams, volunteers and community milestones." />
      <section className="section">
        <div className="container gallery">
          {Array.from({ length: 9 }).map((_, i) => <div key={i}>Add photo {i + 1}</div>)}
        </div>
      </section>
    </>
  );
}
