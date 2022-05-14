import React from 'react';
import Navigation from './components/Navigation/Navigation';
import './styles/global.scss';

function App() {
  return (
    <div className="App">
      <header id="#top" className="header-section">
        <div className="gradient-header"></div>
        <div className="wrapper">
          <Navigation />
        </div>
      </header>
    </div>
  );
}

export default App;
