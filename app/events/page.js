import PageHero from "../components/PageHero";

export default function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title="Where culture takes the stage." text="Competitions, performances, workshops and community experiences designed to celebrate Bhangra at its highest level." />
      <section className="section">
        <div className="container event-list">
          <article className="event dark-card">
            <div>
              <p className="eyebrow">Upcoming</p>
              <h2>Perth City Bhangra Cup 2027</h2>
              <p>The next chapter of Western Australia's Bhangra competition legacy.</p>
            </div>
            <div className="date"><strong>10</strong><span>July<br />2027</span></div>
          </article>
          <article className="event history">
            <strong>2026</strong>
            <div>
              <h3>First Perth City Bhangra Cup</h3>
              <p>A landmark interstate Bhangra competition with more than 80 participants, interstate teams and international cultural talent.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
