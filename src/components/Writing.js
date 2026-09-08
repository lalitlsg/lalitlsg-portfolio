import React from "react";
import { blogs } from "../data/site";

export default function Writing() {
  return (
    <section className="wrap" id="writing">
      <div className="section-head">
        <div>
          <p className="eyebrow">Notes</p>
          <h2>Writing</h2>
        </div>
        <p className="kicker">Earlier essays on OpenStack, observability, and realtime systems.</p>
      </div>
      <div className="write-grid">
        {blogs.map((post) => (
          <article className="write" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.info}</p>
            <a className="btn btn-ghost" href={post.link} target="_blank" rel="noreferrer">
              Read on Medium
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
