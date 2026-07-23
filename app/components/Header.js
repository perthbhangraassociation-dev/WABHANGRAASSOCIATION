"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["President", "/president"],
  ["Committee", "/committee"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Sponsors", "/sponsors"],
  ["Contact", "/contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="logo-circle">WA</span>
          <span>
            <strong>WA Bhangra Association</strong>
            <small>Western Australia</small>
          </span>
        </Link>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span>
        </button>

        <nav className={open ? "links open" : "links"}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
