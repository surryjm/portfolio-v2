import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header id="#top" className="header-section">
          <div className="gradient-header"></div>
          <div className="wrapper">
            <Navigation />
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
