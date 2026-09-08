import React from "react";
import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Crafted as a senior frontend portfolio — React, Next.js, and product UI.</span>
      </div>
    </footer>
  );
}
