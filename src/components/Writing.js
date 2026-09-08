import React from "react";
import { blogs } from "../data/site";

export default function Writing() {
  return (
    <section className="wrap" id="writing">
      <header className="section-head">
        <p className="index">04</p>
        <h2>Notes</h2>
      </header>
      <ul className="note-list">
        {blogs.map((post) => (
          <li key={post.id}>
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </a>
            <span>{post.info}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
