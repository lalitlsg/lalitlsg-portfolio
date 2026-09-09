import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "profiles", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "blogs", label: "Blogs" },
  { id: "connect", label: "Contact" },
];

function sectionTop(id) {
  const el = document.getElementById(id);
  if (!el) return Number.POSITIVE_INFINITY;
  return el.getBoundingClientRect().top + window.scrollY;
}

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav")) || 64;
      const marker = window.scrollY + navHeight + 16;
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      // Resolve by document order so nav label order can differ from section order.
      const ordered = [...links].sort((a, b) => sectionTop(a.id) - sectionTop(b.id));
      let current = ordered[0]?.id || "about";

      if (nearBottom) {
        current = ordered[ordered.length - 1].id;
      } else {
        for (const link of ordered) {
          if (sectionTop(link.id) <= marker) current = link.id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <NavLink className="brand" to="/" exact onClick={() => setOpen(false)}>
            <span className="mark">LG</span>
            <span className="brand-name">Lalit Garghate</span>
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.id}
                exact
                to={{ pathname: "/", hash: `#${link.id}` }}
                isActive={() => activeId === link.id}
              >
                {link.label}
              </NavLink>
            ))}
            <button className="text-btn" type="button" onClick={onToggle} aria-label="Toggle color theme">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </nav>
          <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      {open ? (
        <div className="drawer">
          <nav className="drawer-nav wrap" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.id}
                exact
                to={{ pathname: "/", hash: `#${link.id}` }}
                isActive={() => activeId === link.id}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button className="text-btn" type="button" onClick={onToggle}>
              {theme === "dark" ? "Switch to light" : "Switch to dark"}
            </button>
          </nav>
        </div>
      ) : null}
    </>
  );
}
