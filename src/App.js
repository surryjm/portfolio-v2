import React from 'react';
import Navigation from './components/Navigation';
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header id="#top" class="header-section">
        <div class="gradient-header"></div>
        <div class="wrapper">
          <Navigation />
        </div>
       </header>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
