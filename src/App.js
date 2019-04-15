import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/home/home'; 
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      </div>
    );
  }
}

export default App;
