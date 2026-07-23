import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="texture"></div>
        <div className="ring ring-one"></div>
        <div className="ring ring-two"></div>

        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Western Australia · Incorporated Association</p>
            <h1>Bhangra lives <span>where community moves.</span></h1>
            <p className="lead">
              Preserving Punjabi heritage through Bhangra, music, education,
              performance and community connection.
            </p>
            <div className="buttons">
              <Link href="/about" className="button dark">Discover our story</Link>
              <Link href="/events" className="button outline">Explore events</Link>
            </div>
          </div>

          <aside className="glass featured">
            <p className="eyebrow">Featured event</p>
            <div className="year">2027</div>
            <h2>Perth City Bhangra Cup</h2>
            <p>The legacy continues.</p>
            <hr />
            <p><strong>10 July 2027</strong><br />Perth, Western Australia</p>
            <Link href="/events" className="text-link">View event details →</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>A home for Bhangra in Western Australia.</h2>
          </div>
          <p className="large">
            We create opportunities for children, adults, artists, volunteers
            and families to learn, perform, compete and celebrate Punjabi culture.
          </p>
        </div>
      </section>

      <section className="section topless">
        <div className="container cards">
          <article><span>01</span><h3>Culture</h3><p>Preserving Punjabi folk traditions through authentic Bhangra, music and storytelling.</p></article>
          <article><span>02</span><h3>Community</h3><p>Bringing together families, performers, volunteers and cultural partners across Western Australia.</p></article>
          <article><span>03</span><h3>Legacy</h3><p>Creating pathways for future generations to learn, perform, compete and lead.</p></article>
        </div>
      </section>

      <section className="section black">
        <div className="container black-grid">
          <div>
            <p className="eyebrow muted">Signature platform</p>
            <h2>Perth City Bhangra Cup</h2>
            <p className="lead pale">
              A major Bhangra competition platform connecting Western Australia
              with interstate and international talent.
            </p>
            <Link href="/events" className="button light">Explore the Cup</Link>
          </div>
          <div className="stats">
            <div><strong>80+</strong><span>Participants in the inaugural cup</span></div>
            <div><strong>4</strong><span>Competition categories</span></div>
            <div><strong>WA</strong><span>A milestone for Bhangra culture</span></div>
            <div><strong>1</strong><span>Community moving together</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container glass callout">
          <div>
            <p className="eyebrow">Join the movement</p>
            <h2>Perform. Volunteer. Partner. Belong.</h2>
          </div>
          <Link href="/contact" className="button dark">Contact us</Link>
        </div>
      </section>
    </>
  );
}
