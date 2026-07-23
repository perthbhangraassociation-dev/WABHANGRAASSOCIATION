import PageHero from "../components/PageHero";

export default function President() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="A message from the President."
        text="Building a strong, inclusive and lasting future for Bhangra in Western Australia."
      />
      <section className="section">
        <div className="container two-col">
          <div className="photo-placeholder">Add President photo</div>
          <article>
            <p className="quote">“Our goal is not only to organise events, but to create a lasting cultural platform where future generations can learn, participate, perform and lead.”</p>
            <p>WA Bhangra Association was established to bring structure, opportunity and long-term vision to Bhangra in Western Australia.</p>
            <p><strong>TJ Singh</strong><br />President</p>
          </article>
        </div>
      </section>
    </>
  );
}
