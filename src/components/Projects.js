import React from "react";
import { projects } from "../data/projects";
import { SAND_BOXES } from "../data/sandboxes";

export default function Projects() {
  return (
    <section className="wrap" id="work">
      <div className="section-head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>
        <p className="kicker">Personal builds spanning React, Vue, and React Native — galleries, commerce, payments-adjacent tools, and native device features.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <img src={project.image} alt="" />
            <div className="project-body">
              <span className="tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.info}</p>
              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="sandbox">
        {SAND_BOXES.map((box) => (
          <a className="chip" key={box.id} href={box.url} target="_blank" rel="noreferrer">
            {box.name}
          </a>
        ))}
      </div>
    </section>
  );
}
