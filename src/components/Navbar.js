import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: { pathname: "/", hash: "#about" }, label: "About" },
  { to: { pathname: "/", hash: "#experience" }, label: "Experience" },
  { to: "/work", label: "Work" },
  { to: "/blogs", label: "Notes" },
  { to: "/links", label: "Contact" },
];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="mark">LG</span>
            <span className="brand-name">Lalit Garghate</span>
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to}>
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
              <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)}>
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
