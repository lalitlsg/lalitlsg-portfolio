import React from "react";
import Tilt from "./Tilt";
import Reveal from "./Reveal";
import { codingProfiles } from "../data/site";
import leetcode from "../images/LeetCode.png";
import hackerrank from "../images/Hackerrank.svg";
import gfg from "../images/geeksforgeeks.png";

const logos = {
  LeetCode: leetcode,
  HackerRank: hackerrank,
  GeeksforGeeks: gfg,
};

export default function CodingProfiles() {
  return (
    <section className="wrap" id="profiles">
      <header className="section-head">
        <p className="index">03</p>
        <h2>Coding profiles</h2>
      </header>
      <div className="profile-grid">
        {codingProfiles.map((item) => (
          <Reveal key={item.name}>
            <Tilt>
              <a className="profile-card" href={item.href} target="_blank" rel="noreferrer">
                <img src={logos[item.name]} alt="" />
                <span>{item.name}</span>
              </a>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
