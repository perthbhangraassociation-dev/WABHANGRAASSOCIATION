import PageHero from "../components/PageHero";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our organisation"
        title="Culture with purpose."
        text="WA Bhangra Association Incorporated is a Western Australian not-for-profit organisation focused on preserving Punjabi heritage and strengthening community connection."
      />
      <section className="section">
        <div className="container two-col">
          <article>
            <h2>Our purpose</h2>
            <p>We create opportunities for people of all ages to experience Bhangra through training, performance, competition, cultural education and community events.</p>
            <p>Our work connects generations, supports emerging artists and helps Punjabi culture remain visible, respected and active in Western Australia.</p>
          </article>
          <aside className="glass info">
            <p className="eyebrow">Our focus</p>
            <ul>
              <li>Cultural preservation</li>
              <li>Youth development</li>
              <li>Community participation</li>
              <li>Events and competitions</li>
              <li>Education and partnerships</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
