import React from "react";
import Tilt from "./Tilt";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section className="wrap" id="experience">
      <header className="section-head">
        <p className="index">01</p>
        <h2>Experience</h2>
      </header>
      <div className="timeline">
        {experience.map((job) => (
          <Tilt key={job.company}>
            <article className="exp">
              <div className="exp-top">
                <h3 className="company">
                  {job.company}
                  <span className="place"> · {job.location}</span>
                </h3>
                <span className="period">{job.period}</span>
              </div>
              {job.roles.map((role) => (
                <div className="role" key={role.title}>
                  <div className="exp-top">
                    <h4>{role.title}</h4>
                    <span className="period">{role.period}</span>
                  </div>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
