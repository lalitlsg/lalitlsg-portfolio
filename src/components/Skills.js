import React from "react";
import { awards, education, skillGroups } from "../data/site";

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <header className="section-head">
        <p className="index">02</p>
        <h2>Skills</h2>
      </header>
      <div className="skill-list">
        {skillGroups.map((group) => (
          <p key={group.title}>
            <strong>{group.title}</strong>
            <span>{group.items.join(" · ")}</span>
          </p>
        ))}
      </div>
      <div className="meta-grid">
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
        <div>
          <h3>Awards</h3>
          {awards.map((award) => (
            <p key={award} className="meta-line">
              {award}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
