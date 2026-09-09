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

const AUTO_SPEED = 16; // px per second

function ShotCard({ shot, name, index, decorative }) {
  return (
    <figure className="achieve-card" aria-hidden={decorative ? "true" : undefined}>
      <img
        src={shot}
        alt={decorative ? "" : `${name} achievement ${index + 1}`}
        draggable="false"
      />
    </figure>
  );
}

export default function CodingProfiles() {
  const [activeId, setActiveId] = useState(profiles[0].id);
  const scrollerRef = useRef(null);
  const active = profiles.find((profile) => profile.id === activeId) || profiles[0];

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return undefined;

    root.scrollLeft = 0;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let paused = false;
    let dragging = false;
    let last = performance.now();
    let startX = 0;
    let startScroll = 0;
    let resumeTimer = 0;

    const loopWidth = () => root.scrollWidth / 2;

    const wrapScroll = () => {
      const half = loopWidth();
      if (half <= 0) return;
      if (root.scrollLeft >= half) root.scrollLeft -= half;
      else if (root.scrollLeft < 0) root.scrollLeft += half;
    };

    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };

    const resume = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        if (dragging || root.matches(":hover") || root.contains(document.activeElement)) return;
        paused = false;
        last = performance.now();
      }, 120);
    };

    const tick = (now) => {
      const dt = Math.min(48, now - last) / 1000;
      last = now;
      if (!reduceMotion && !paused && !dragging) {
        root.scrollLeft += AUTO_SPEED * dt;
        wrapScroll();
      }
      raf = requestAnimationFrame(tick);
    };

    const onPointerDown = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragging = true;
      pause();
      startX = event.clientX;
      startScroll = root.scrollLeft;
      root.classList.add("is-dragging");
      root.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      root.scrollLeft = startScroll - (event.clientX - startX);
      wrapScroll();
    };

    const onPointerUp = (event) => {
      if (!dragging) return;
      dragging = false;
      root.classList.remove("is-dragging");
      if (root.hasPointerCapture?.(event.pointerId)) {
        root.releasePointerCapture(event.pointerId);
      }
      if (root.matches(":hover")) pause();
      else resume();
    };

    const onWheel = () => {
      pause();
      resume();
    };

    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener("focusin", pause);
    root.addEventListener("focusout", resume);
    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerUp);
    root.addEventListener("wheel", onWheel, { passive: true });
    root.addEventListener("scroll", wrapScroll, { passive: true });

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resumeTimer);
      root.removeEventListener("mouseenter", pause);
      root.removeEventListener("mouseleave", resume);
      root.removeEventListener("focusin", pause);
      root.removeEventListener("focusout", resume);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerUp);
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("scroll", wrapScroll);
    };
  }, [activeId]);

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
              <a className="profile-link" href={active.href} target="_blank" rel="noreferrer">
                Open profile
              </a>
            </div>
          </div>

          <div
            className="profile-marquee"
            ref={scrollerRef}
            tabIndex={0}
            aria-label={`${active.name} achievements`}
          >
            <div className="profile-marquee-track" key={active.id}>
              {active.shots.map((shot, index) => (
                <ShotCard key={`${active.id}-a-${index}`} shot={shot} name={active.name} index={index} />
              ))}
              {active.shots.map((shot, index) => (
                <ShotCard
                  key={`${active.id}-b-${index}`}
                  shot={shot}
                  name={active.name}
                  index={index}
                  decorative
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
