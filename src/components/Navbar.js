import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import portrait from "../images/lalit.png";

const links = [
  { to: { pathname: "/", hash: "#about" }, label: "About" },
  { to: { pathname: "/", hash: "#experience" }, label: "Experience" },
  { to: "/work", label: "Work" },
  { to: "/blogs", label: "Writing" },
  { to: "/links", label: "Connect" },
];

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const items = (
    <>
      {links.map((link) => (
        <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)}>
          {link.label}
        </NavLink>
      ))}
      <button className="icon-btn" type="button" onClick={onToggle} aria-label="Toggle color theme">
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </>
  );

  return (
    <header className="site-header">
      <div className="wrap nav">
        <NavLink className="brand" to="/">
          <img className="avatar" src={portrait} alt="Lalit Garghate" />
          <span>Lalit Garghate</span>
        </NavLink>
        <nav className="nav-links">{items}</nav>
        <button className="icon-btn menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? <div className="mobile-menu wrap">{items}</div> : null}
    </header>
  );
}
