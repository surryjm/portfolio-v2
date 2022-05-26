import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

function App() {
  const [isNavFull, setIsNavFull] = useState(false);

  return (
    <div className="App">
      <header id="#top" className="header-section">
      {/*-- GRADIENT HEADER --*/}
        <div className="gradient-header"></div>
        <div className="wrapper">
        {/*-- NAV --*/}
          <Navigation setIsNavFull={ setIsNavFull } isNavFull={ isNavFull }/>
        </div>
      </header>
      <div className="angle-nav"></div>
      <main id="main" className={isNavFull ? "blur" : ""}>
        <WelcomeMessage />
        <div className="angle-welcome"></div>
        <About />
        <Projects />
        <div className="angle-contact"></div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
