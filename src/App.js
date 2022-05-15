import React from 'react';
import Navigation from './components/Navigation/Navigation';
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

      </main>
    </div>
  );
}

export default App;
