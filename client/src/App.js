import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import Backoffice from './pages/backoffice';

// App components
import Layout from './components/templates/layout';

export default function App() {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/backoffice" component={Backoffice} />
      </Router>
    </Layout>
  );
}