import React from "react";
import { profile, socials } from "../data/site";

export default function Connect() {
  return (
    <section className="wrap" id="connect">
      <header className="section-head">
        <p className="index">06</p>
        <h2>Contact</h2>
      </header>
      <p className="lede">{profile.location}</p>
      <p className="contact-row">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p className="sandbox">
        {socials.map((item, index) => (
          <span key={item.name}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
            {index < socials.length - 1 ? " / " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
