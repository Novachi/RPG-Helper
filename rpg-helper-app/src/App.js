import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class AddSession extends Component {
  render() {
    return (
      <h1>Dodaj se</h1>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="App Container">
        <div className="titleDiv">
          <h1 id="title">RPG-Helper</h1>
        </div>
        <div className="controls">
          <div className="label control">
            <label>Choose session:</label>
          </div>
          <div className="control">
            <select id="sessionsDropdown">
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
          <div className="control">
            <label className="button"><a href="#">Accept</a></label>
          </div>
          <div className="control">
            <label className="label">Or add a new one:</label>
          </div>
          <div className="control">
            <label className="button"><a href="/add/session">Add session</a></label>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path="/add/session" component={AddSession}/>
        </div>
      </Router>
    );
  }
}

export default App;
