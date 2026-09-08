import React from "react";
import { codingProfiles, profile, socials } from "../data/site";

export default function Connect() {
  return (
    <section className="wrap" id="connect">
      <div className="section-head">
        <div>
          <p className="eyebrow">Let’s talk</p>
          <h2>Connect</h2>
        </div>
        <p className="kicker">Open to senior frontend, UI architecture, and product-engineering conversations.</p>
      </div>
      <div className="split">
        <article className="card">
          <h3>Direct</h3>
          <p className="kicker" style={{ marginTop: 12 }}>
            {profile.location}
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email Lalit
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </div>
        </article>
        <article className="card">
          <h3>Profiles</h3>
          <div className="socials">
            {socials.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            ))}
          </div>
          <p className="kicker" style={{ marginTop: 18 }}>
            Coding:{" "}
            {codingProfiles.map((item, index) => (
              <span key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
                {index < codingProfiles.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </article>
      </div>
    </section>
  );
}
