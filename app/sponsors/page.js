import PageHero from "../components/PageHero";

export default function Sponsors() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Backing culture. Building legacy." text="Our sponsors and community partners help make professional cultural events and opportunities possible." />
      <section className="section">
        <div className="container sponsors">
          {Array.from({ length: 12 }).map((_, i) => <div key={i}>Sponsor logo</div>)}
        </div>
      </section>
    </>
  );
}
