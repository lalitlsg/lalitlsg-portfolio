import React, { useState } from "react";
import { Wrapper } from "./styles/Layout";
import { Header } from "./components/header/Header";
import Menu from "./components/menu/Menu";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <Wrapper dark={dark}>
      <Router>
        <Header handleClick={toggleDark} />
        <Menu dark={dark} />
        <Main />

        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
