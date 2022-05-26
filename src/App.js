import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './styles/global.scss';

function App() {
  const [isNavFull, setIsNavFull] = useState(false);
  const [isLargeBreakpoint, setIsLargeBreakpoint] = useState(window.innerWidth > 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const breakpoint = window.innerWidth > 768;
      console.log(`breakpoint: ${breakpoint}`);
      console.log(`isLargeBreakpoint: ${isLargeBreakpoint}`);
      if (breakpoint !== isLargeBreakpoint) {
        setIsLargeBreakpoint(isLargeBreakpoint);
      } 
    }, []);
  }, [isLargeBreakpoint]);

//   useEffect(() => {
//     window.addEventListener("resize", () => {
//         const ismobile = window.innerWidth < 1200;
//         if (ismobile !== isMobile) setIsMobile(ismobile);
//     }, false);
// }, [isMobile]);

  return (
    <div className="App">
      <header id="#top" className="header-section">
      {/*-- GRADIENT HEADER --*/}
        <div className="gradient-header"></div>
        <div className="wrapper">
        {/*-- NAV --*/}
          <Navigation 
            setIsNavFull={ setIsNavFull } 
            isNavFull={ isNavFull } 
            isLargeBreakpoint={ isLargeBreakpoint }
          />
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
