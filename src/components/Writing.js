import React from "react";
import Reveal from "./Reveal";
import { blogs } from "../data/site";

export default function Writing() {
  return (
    <section className="wrap" id="blogs">
      <header className="section-head">
        <p className="index">05</p>
        <h2>Blogs</h2>
      </header>
      <ul className="blog-list">
        {blogs.map((post) => (
          <Reveal key={post.id}>
            <li>
              <a className="blog-card" href={post.link} target="_blank" rel="noreferrer">
                <span className="tag">Medium</span>
                <h3>{post.title}</h3>
                <p>{post.info}</p>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
