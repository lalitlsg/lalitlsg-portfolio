import React from "react";
import Reveal from "./Reveal";
import { awards, education, skillGroups } from "../data/site";

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <header className="section-head">
        <p className="index">02</p>
        <h2>Skills</h2>
      </header>
      <Reveal>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <p key={group.title}>
              <strong>{group.title}</strong>
              <span>{group.items.join(" · ")}</span>
            </p>
          ))}
        </div>
      </Reveal>
      <div className="meta-grid">
        <Reveal>
          <div>
            <h3>Education</h3>
            {education.map((item) => (
              <p key={item.title} className="meta-line">
                {item.title} — {item.place}
                <span>
                  {item.period} · {item.meta}
                </span>
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h3>Awards</h3>
            {awards.map((award) => (
              <p key={award} className="meta-line">
                {award}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
