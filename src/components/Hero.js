import React from "react";
import portrait from "../images/lalit.png";
import { highlights, profile } from "../data/site";

export default function Hero() {
  return (
    <>
      <section className="hero wrap" id="about">
        <div>
          <p className="eyebrow">
            <span className="dot" /> {profile.role} at {profile.company} · {profile.years} years
          </p>
          <h1>
            I design and ship <span className="accent">premium product UI</span> for lending, payments, and CRM.
          </h1>
          <p className="lede">{profile.summary}</p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              View resume
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <img className="portrait" src={portrait} alt="Portrait of Lalit Garghate" />
          <div className="meta-row">
            <span>{profile.location}</span>
            <span>Available for senior frontend conversations</span>
          </div>
        </aside>
      </section>
      <div className="wrap stats">
        {[
          { value: "6+", label: "Years in product UI" },
          { value: "25M+", label: "Daily Paytm checkout txns" },
          { value: "54%", label: "WebView render improvement" },
          { value: "39%", label: "CRM ticket-time reduction" },
        ].map((stat) => (
          <article className="stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
      <section className="wrap">
        <div className="cards">
          <article className="card">
            <h2>What I focus on</h2>
            <ul className="highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Domains</h2>
            <p className="kicker" style={{ marginTop: 12 }}>
              Lending, fintech, payments, customer support platforms, KYC, and multi-cloud operations — from GS Lab and Paytm to Navi.
            </p>
            <p className="contact-mini" style={{ marginTop: 18 }}>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {" · "}
              <a href={profile.resumeDrive} target="_blank" rel="noreferrer">
                Drive resume
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
