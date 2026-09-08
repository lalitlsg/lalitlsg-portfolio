import React from "react";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section className="wrap" id="experience">
      <div className="section-head">
        <div>
          <p className="eyebrow">Career</p>
          <h2>Experience</h2>
        </div>
        <p className="kicker">SDE III at Navi, previously Paytm checkout and GS Lab multi-cloud — always on customer-facing web platforms.</p>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article className="exp" key={job.company}>
            <div className="exp-top">
              <h3 className="company">
                {job.company} <span style={{ color: "var(--muted)", fontSize: "1rem" }}>{job.location}</span>
              </h3>
              <span className="period">{job.period}</span>
            </div>
            {job.roles.map((role) => (
              <div className="role" key={role.title}>
                <h3>{role.title}</h3>
                <span className="period">{role.period}</span>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
