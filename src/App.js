import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { profile } from "./data/site";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const map = {
      "/": hash ? null : "top",
      "/home": hash ? null : "top",
      "/work": "work",
      "/blogs": "writing",
      "/links": "connect",
    };
    const id = (hash || "").replace("#", "") || map[pathname];
    const el = id ? document.getElementById(id) : null;
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const titles = {
      "/work": `${profile.name} | Work`,
      "/blogs": `${profile.name} | Writing`,
      "/links": `${profile.name} | Connect`,
    };
    document.title = titles[pathname] || `${profile.name} | ${profile.role}`;
  }, [pathname, hash]);

  return null;
}

function Portfolio() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
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
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grain" />
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
