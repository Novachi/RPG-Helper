import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from './Views/Main';
import SessionMenu from './Views/SessionMenu';
import Notes from './Views/Notes';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Main}/>
          <Route path="/menu" component={SessionMenu}/>
          <Route path="/notes" component={Notes}/>
      </Router>
    );
  }
}

export default App;
