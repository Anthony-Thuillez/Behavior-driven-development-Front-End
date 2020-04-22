import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// App routes
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

// App components
import Main from './components/layouts/main';

export default function App() {
  return (
    <Main>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">La casa</Link>
              </li>
              <li>
                <Link to="/projects">Nos casses</Link>
              </li>
              <li>
                <Link to="/about">Sous le masque</Link>
              </li>
              <li>
                <Link to="/contact">Un (r)enseignement ?</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </Main>
  );
}