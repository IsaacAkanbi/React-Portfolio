import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

export default function App() {
  return (
    <Router>
      <h1 className="font-weight-bold"> Isaac O. Akanbi </h1>
      <div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="card-header-tabs ">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutMe">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        </div> 
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutMe">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    
        <footer>Isaac Akanbi Page</footer>
      </div>

    </Router>

    
  );
}

function Home() {
  return <h2>Home</h2>;
}

// function AboutMe() {
//   return <h2>About Me</h2>;
// }

// function Portfolio() {
//   return <h2>Portfolio</h2>;
// }

// function Contact() {
//   return <h2>Contact</h2>;
// }

// function Resume() {
//   return <h2>Resume</h2>;
// }