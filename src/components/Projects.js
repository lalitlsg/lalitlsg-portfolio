import React from "react";
import Tilt from "./Tilt";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import { SAND_BOXES } from "../data/sandboxes";

export default function Projects() {
  return (
    <section className="wrap" id="work">
      <header className="section-head">
        <p className="index">04</p>
        <h2>Work</h2>
      </header>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <Tilt>
              <article className={`project motif-${project.motif}`}>
                <div className="device" style={{ "--tilt": `${index % 2 === 0 ? -14 : 14}deg` }}>
                  <div className="device-screen">
                    <img src={project.image} alt={`${project.title} screenshot`} />
                  </div>
                </div>
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
          </Reveal>
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
