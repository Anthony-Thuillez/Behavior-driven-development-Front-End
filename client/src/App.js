import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/organisms/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}