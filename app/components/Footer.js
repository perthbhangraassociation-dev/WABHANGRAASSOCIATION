import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>WA Bhangra Association</h3>
          <p>Culture. Community. Legacy.</p>
        </div>
        <div>
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <a href="mailto:info@wabhangra.org.au">info@wabhangra.org.au</a>
          <span>Perth, Western Australia</span>
        </div>
      </div>
      <div className="container copyright">© 2026 WA Bhangra Association Incorporated</div>
    </footer>
  );
}
