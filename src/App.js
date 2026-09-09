import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Writing from "./components/Writing";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const map = {
      "/": hash ? null : "top",
      "/home": hash ? null : "top",
      "/work": "work",
      "/blogs": "blogs",
      "/links": "connect",
    };
    const id = (hash || "").replace("#", "") || map[pathname];
    const el = id ? document.getElementById(id) : null;
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const titles = {
      "/work": "Work · Lalit Garghate",
      "/blogs": "Blogs · Lalit Garghate",
      "/links": "Contact · Lalit Garghate",
    };
    document.title = titles[pathname] || "Lalit Garghate";
  }, [pathname, hash]);

  return null;
}

function Portfolio() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Writing />
      <Connect />
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="page">
        <a className="skip" href="#top">
          Skip to content
        </a>
        <Navbar theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
        <main id="top">
          <ScrollToHash />
          <Switch>
            <Route path="/" component={Portfolio} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
