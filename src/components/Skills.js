import React from "react";
import { awards, education, skillGroups } from "../data/site";

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <div className="section-head">
        <div>
          <p className="eyebrow">Craft</p>
          <h2>Skills & education</h2>
        </div>
        <p className="kicker">A React / Next.js core, with performance, SSR, localization, and enough platform fluency to ship securely.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="split" style={{ marginTop: 16 }}>
        <article className="edu">
          <h3>Education</h3>
          {education.map((item) => (
            <div className="role" key={item.title}>
              <h3>{item.title}</h3>
              <p className="kicker">
                {item.place} · {item.period} · {item.meta}
              </p>
            </div>
          ))}
        </article>
        <article className="edu">
          <h3>Awards</h3>
          <ul className="highlights" style={{ marginTop: 14 }}>
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
