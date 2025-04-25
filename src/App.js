import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stav Matityahu</h1>
        <h2>DevOps & Software Engineer</h2>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#languages">Languages</a></li>
        </ul>
      </nav>
      <main>
        <Home />
      </main>
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Stav Matityahu | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;