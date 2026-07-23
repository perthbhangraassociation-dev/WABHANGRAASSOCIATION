import PageHero from "../components/PageHero";

const roles = ["President", "Vice President", "Secretary", "Treasurer", "Committee Member", "Committee Member"];

export default function Committee() {
  return (
    <>
      <PageHero eyebrow="Governance" title="People serving the community." text="Our committee supports the Association's governance, planning, partnerships and cultural programs." />
      <section className="section">
        <div className="container people">
          {roles.map((role, i) => (
            <article key={i}>
              <div className="avatar">{i + 1}</div>
              <h3>Committee name</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
