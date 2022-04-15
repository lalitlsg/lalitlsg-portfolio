import React, { useState } from 'react';
import { Wrapper } from './styles/Layout';
import { Header } from './components/header/Header';
import Menu from './components/menu/Menu';
import { Main } from './components/Main/Main';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

export const Theme = React.createContext(false);

function App() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <Theme.Provider value={dark}>
      <Wrapper dark={dark}>
        <Router>
          <Header handleClick={toggleDark} />
          <Menu dark={dark ? 1 : 0} />
          <Main />
          <Footer />
        </Router>
      </Wrapper>
    </Theme.Provider>
  );
}

export default App;
