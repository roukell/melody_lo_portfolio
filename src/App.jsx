import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbars';
import About from './Components/About';
import Project from './Components/Project';

const App = () => {

  return (
    <Router basename='/'>
      <div className='appLayout'>
        <Navbar />
        <main className='contentArea'>
          <Switch>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Project />
            </Route>
          </Switch>
        </main>
      </div>
    </ Router>
  )
}

export default App;
