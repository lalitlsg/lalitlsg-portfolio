import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import hackerrank1 from "../images/coding-profiles/hackerrank/hackerrank1.png";
import hackerrank2 from "../images/coding-profiles/hackerrank/hackerrank2.png";
import hackerrank3 from "../images/coding-profiles/hackerrank/hackerrank3.png";
import hackerrank4 from "../images/coding-profiles/hackerrank/hackerrank4.png";
import leetcode1 from "../images/coding-profiles/leetcode/leetcode1.png";
import leetcode2 from "../images/coding-profiles/leetcode/leetcode2.png";
import leetcode3 from "../images/coding-profiles/leetcode/leetcode3.png";
import leetcode4 from "../images/coding-profiles/leetcode/leetcode4.png";
import leetcode5 from "../images/coding-profiles/leetcode/leetcode5.png";
import leetcode6 from "../images/coding-profiles/leetcode/leetcode6.png";
import leetcode7 from "../images/coding-profiles/leetcode/leetcode7.png";
import geek1 from "../images/coding-profiles/geeksforgeeks/geek1.png";
import geek2 from "../images/coding-profiles/geeksforgeeks/geek2.png";
import geek3 from "../images/coding-profiles/geeksforgeeks/geek3.png";
import leetcodeLogo from "../images/LeetCode.png";
import hackerrankLogo from "../images/Hackerrank.svg";
import gfgLogo from "../images/geeksforgeeks.png";

const profiles = [
  {
    id: "hackerrank",
    name: "HackerRank",
    href: "https://www.hackerrank.com/lalit_garghate1",
    logo: hackerrankLogo,
    shots: [hackerrank1, hackerrank2, hackerrank3, hackerrank4],
  },
  {
    id: "leetcode",
    name: "LeetCode",
    href: "https://leetcode.com/lalitlsg/",
    logo: leetcodeLogo,
    shots: [leetcode1, leetcode2, leetcode3, leetcode4, leetcode5, leetcode6, leetcode7],
  },
  {
    id: "geeksforgeeks",
    name: "GeeksforGeeks",
    href: "https://auth.geeksforgeeks.org/user/lalitgarghate/profile",
    logo: gfgLogo,
    shots: [geek1, geek2, geek3],
  },
];

export default function CodingProfiles() {
  const [activeId, setActiveId] = useState(profiles[0].id);
  const scrollerRef = useRef(null);
  const active = profiles.find((profile) => profile.id === activeId) || profiles[0];

  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollLeft = 0;
  }, [activeId]);

  const scrollByCard = (direction) => {
    const node = scrollerRef.current;
    if (!node) return;
    const step = Math.min(420, Math.max(260, node.clientWidth * 0.72));
    node.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="wrap" id="profiles">
      <header className="section-head">
        <p className="index">03</p>
        <h2>Coding profiles</h2>
      </header>

      <Reveal>
        <div className="profile-panel">
          <div className="profile-toolbar">
            <div className="profile-tabs" role="tablist" aria-label="Coding platforms">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  role="tab"
                  aria-selected={profile.id === activeId}
                  className={`profile-tab${profile.id === activeId ? " is-active" : ""}`}
                  onClick={() => setActiveId(profile.id)}
                >
                  <img src={profile.logo} alt="" />
                  <span>{profile.name}</span>
                </button>
              ))}
            </div>
            <div className="profile-controls">
              <button type="button" className="profile-ctrl" onClick={() => scrollByCard(-1)} aria-label="Previous achievements">
                ‹
              </button>
              <button type="button" className="profile-ctrl" onClick={() => scrollByCard(1)} aria-label="Next achievements">
                ›
              </button>
              <a className="profile-link" href={active.href} target="_blank" rel="noreferrer">
                Open profile
              </a>
            </div>
          </div>

          <div className="profile-scroller" ref={scrollerRef} tabIndex={0} aria-label={`${active.name} achievements`}>
            {active.shots.map((shot, index) => (
              <figure className="achieve-card" key={`${active.id}-${index}`}>
                <img src={shot} alt={`${active.name} achievement ${index + 1}`} />
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
