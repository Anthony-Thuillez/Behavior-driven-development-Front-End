import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

// App components
import MainWrapper from './components/templates/main'

export default function App() {
  return (
    <MainWrapper>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </MainWrapper>
  );
}