import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

// App components
import Layout from './components/templates/layout'

export default function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Layout>
    </Router>
  );
}