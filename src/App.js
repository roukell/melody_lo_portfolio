import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbars';
import About from './Components/About';
import Project from './Components/Project';
import Footer from './Components/Footer';

const App = () => {

  return (
    <Router basename='/'>
      <Navbar className='stickyNavbar' />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
          <Project />
        </Route>
        <Route path="/project">
          <Home />
          <Project />
        </Route>
      </Switch>
      <Footer />
    </ Router>
  )
}

export default App;
