import React from 'react';
import Navigation from './components/Navigation/Navigation';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <header id="#top" className="header-section">
      {/*-- GRADIENT HEADER --*/}
        <div className="gradient-header"></div>
        <div className="wrapper">
        {/*-- NAV --*/}
          <Navigation />
        </div>
      </header>
      <div className="angle-nav"></div>
      <main id="main">
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
