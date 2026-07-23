import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something meaningful." text="Contact us about membership, performances, sponsorship, volunteering, partnerships or upcoming events." />
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>WA Bhangra Association Incorporated</h2>
            <p className="large">Perth, Western Australia</p>
            <a className="email" href="mailto:info@wabhangra.org.au">info@wabhangra.org.au</a>
          </div>
          <form className="contact-form" action="mailto:info@wabhangra.org.au" method="post" encType="text/plain">
            <label>Name<input name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Enquiry
              <select name="enquiry">
                <option>General enquiry</option>
                <option>Sponsorship</option>
                <option>Membership</option>
                <option>Performance booking</option>
                <option>Volunteering</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows="6" required></textarea></label>
            <button className="button dark" type="submit">Send enquiry</button>
          </form>
        </div>
      </section>
    </>
  );
}
