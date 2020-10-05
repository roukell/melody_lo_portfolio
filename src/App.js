import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbars';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <Navbar className='stickyNavbar' />
      <Switch>
        <Route path="https://melodylo.com/about">
          <About />
        </Route>
        <Route path="https://melodylo.com/">
          <Home />
          <Project />
        </Route>
        <Route path="https://melodylo.com/project">
          <Home />
          <Project />
        </Route>
      </Switch>
      <Footer />
    </ Router>
  )
}

export default App;
