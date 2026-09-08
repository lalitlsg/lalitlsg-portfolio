import React from "react";
import LayerStack from "./LayerStack";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <section className="hero wrap" id="about">
      <div className="hero-copy reveal is-in">
        <p className="eyebrow">
          {profile.role} · {profile.company}
        </p>
        <h1>{profile.name}</h1>
        <p className="display">
          Frontend engineer working on architecture, performance, and the customer-facing web.
        </p>
        <p className="lede">{profile.summary}</p>
        <div className="actions">
          <a className="btn btn-primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <LayerStack />
    </section>
  );
}
