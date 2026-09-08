import React from "react";
import Tilt from "./Tilt";
import { projects } from "../data/projects";
import { SAND_BOXES } from "../data/sandboxes";

export default function Projects() {
  return (
    <section className="wrap" id="work">
      <header className="section-head">
        <p className="index">03</p>
        <h2>Work</h2>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <Tilt key={project.id}>
            <article className="project">
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
          </Tilt>
        ))}
      </div>
      <p className="sandbox">
        {SAND_BOXES.map((box, index) => (
          <span key={box.id}>
            <a href={box.url} target="_blank" rel="noreferrer">
              {box.name}
            </a>
            {index < SAND_BOXES.length - 1 ? " / " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}
